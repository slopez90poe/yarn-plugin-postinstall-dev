import { Plugin, Project, scriptUtils } from "@yarnpkg/core";
import { InstallOptions } from "@yarnpkg/core/lib/Project";

const scriptName = "postinstallDev";

// @see https://github.com/yarnpkg/berry/blob/d7d260e4ee6e39ed4b3dac1fdabbed025bf99899/packages/plugin-essentials/sources/commands/run.ts#L82
const plugin: Plugin = {
  hooks: {
    async afterAllInstalled(project: Project, options: InstallOptions) {
      if (options.mode === "update-lockfile" || options.mode === "skip-build") {
        return;
      }
      const locator = project.topLevelWorkspace.anchoredLocator;
      if (
        await scriptUtils.hasPackageScript(locator, scriptName, { project })
      ) {
        const exitCode = await scriptUtils.executePackageScript(
          locator,
          scriptName,
          [],
          {
            project,
            stdin: process.stdin,
            stdout: process.stdout,
            stderr: process.stderr,
          }
        );

        if (exitCode !== 0) {
          const error = new Error(
            `${scriptName} script failed with exit code ${exitCode}`
          );
          error.stack = undefined;

          throw error;
        }
      }
    },
  },
};

export default plugin;
