/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-postinstall-dev",
factory: function (require) {
var plugin=(()=>{var n=Object.create,s=Object.defineProperty;var l=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var d=Object.getPrototypeOf,f=Object.prototype.hasOwnProperty;var u=t=>s(t,"__esModule",{value:!0});var k=t=>{if(typeof require!="undefined")return require(t);throw new Error('Dynamic require of "'+t+'" is not supported')};var g=(t,o)=>{for(var e in o)s(t,e,{get:o[e],enumerable:!0})},P=(t,o,e)=>{if(o&&typeof o=="object"||typeof o=="function")for(let r of p(o))!f.call(t,r)&&r!=="default"&&s(t,r,{get:()=>o[r],enumerable:!(e=l(o,r))||e.enumerable});return t},m=t=>P(u(s(t!=null?n(d(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);var x={};g(x,{default:()=>w});var i=m(k("@yarnpkg/core")),c="postinstallDev",h={hooks:{async afterAllInstalled(t,o){if(o.mode==="update-lockfile")return;let e=t.topLevelWorkspace.anchoredLocator;if(await i.scriptUtils.hasPackageScript(e,c,{project:t})){let r=await i.scriptUtils.executePackageScript(e,c,[],{project:t,stdin:process.stdin,stdout:process.stdout,stderr:process.stderr});if(r!==0){let a=new Error(`${c} script failed with exit code ${r}`);throw a.stack=void 0,a}}}}},w=h;return x;})();
return plugin;
}
};
