/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-postinstall-dev",
factory: function (require) {
var plugin=(()=>{var n=Object.create,s=Object.defineProperty;var l=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var p=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty;var f=t=>s(t,"__esModule",{value:!0});var k=t=>{if(typeof require!="undefined")return require(t);throw new Error('Dynamic require of "'+t+'" is not supported')};var g=(t,e)=>{for(var o in e)s(t,o,{get:e[o],enumerable:!0})},m=(t,e,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of d(e))!u.call(t,r)&&r!=="default"&&s(t,r,{get:()=>e[r],enumerable:!(o=l(e,r))||o.enumerable});return t},P=t=>m(f(s(t!=null?n(p(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);var x={};g(x,{default:()=>w});var i=P(k("@yarnpkg/core")),c="postinstallDev",h={hooks:{async afterAllInstalled(t,e){if(e.mode==="update-lockfile"||e.mode==="skip-build")return;let o=t.topLevelWorkspace.anchoredLocator;if(await i.scriptUtils.hasPackageScript(o,c,{project:t})){let r=await i.scriptUtils.executePackageScript(o,c,[],{project:t,stdin:process.stdin,stdout:process.stdout,stderr:process.stderr});if(r!==0){let a=new Error(`${c} script failed with exit code ${r}`);throw a.stack=void 0,a}}}}},w=h;return x;})();
return plugin;
}
};
