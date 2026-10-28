import {NPM_PACKAGE} from './npm-package-data.mjs';
import {SITE_METADATA} from './site-metadata.mjs';
/** Delivery metadata distinguishes package implementation from confirmed registry publication. */
const delivery=SITE_METADATA.delivery;
export const LIBRARY_SCOPE={
 type:delivery.type,npmPackagePublished:NPM_PACKAGE.published,npmPackage:NPM_PACKAGE,
 summary:delivery.summary,
 enSummary:delivery.enSummary,
 sourceDelivery:delivery.sourceDelivery,
 licensing:delivery.licensing,
 figma:delivery.figma,
 sourceRepository:delivery.sourceRepository,
 versioning:delivery.versioning
};
export function blockScopeLabel(counts,locale='ko'){
 const ready=counts.blocksReady??counts.implemented??0,planned=counts.blocksPlanned??counts.planned??0;
 return locale==='en'?`${ready} working + ${planned} planned = ${ready+planned} total blocks`:`실행 ${ready}개 · 준비 ${planned}개 · 전체 ${ready+planned}개`;
}
export function libraryScopeText(locale='ko',packageInfo=NPM_PACKAGE){
 const identity=`${packageInfo.name}@${packageInfo.version}`;
 if(locale==='en')return `KLIC provides HTML demos and the ${identity} token/theme SDK, CSS, TypeScript and CLI package. ${packageInfo.published?`Install from Bun or npm; the preferred CLI runner is bunx --bun, with npx retained for Node.js consumers.`:`Build it with ${packageInfo.buildCommand}. Bun/bunx is the preferred CLI path; use bunx --bun after publication and npx for Node.js compatibility. Both paths passed local checks. The package is not published to npm yet.`} Components and blocks are reference source workspaces, not separate React component APIs.`;
 return `HTML 데모와 ${identity} 토큰·테마 SDK, CSS·TypeScript·CLI 패키지를 제공합니다. ${packageInfo.published?`Bun 또는 npm으로 설치합니다. CLI 기본 실행은 bunx --bun이며 npx는 Node.js 호환 경로로 지원합니다.`:`${packageInfo.buildCommand}로 빌드합니다. CLI 기본 런타임은 Bun이며 발행 후 bunx --bun으로 실행합니다. npx는 Node.js 호환 경로입니다. 두 소비 경로를 로컬 검증했으며 npm 공개 발행 전입니다.`} 컴포넌트·블록은 별도 React API가 아닌 참고 소스 작업 폴더입니다.`;
}
export function npmPackageGuidance(locale='ko',packageInfo=NPM_PACKAGE){
 const identity=`${packageInfo.name}@${packageInfo.version}`,exports=packageInfo.exports.join(', ');
 if(locale==='en')return packageInfo.published
  ?`${identity} provides ${exports}. It is built with ${packageInfo.buildCommand}. Runtime support: ${packageInfo.runtime}. Prefer Bun install and bunx --bun for the CLI; npx remains compatible for Node.js consumers.`
  :`${identity} provides ${exports}. It targets ${packageInfo.runtime} and is built with ${packageInfo.buildCommand}. Bun/bunx is preferred; Node/npm/npx remains supported. CI checked both paths with cold and warm caches against an isolated local registry. The package is not published to npm yet, so use a local tarball.`;
 return packageInfo.published
  ?`${identity}는 ${exports}를 제공합니다. 빌드는 ${packageInfo.buildCommand}를 사용합니다. CLI 기본 실행은 Bun 설치와 bunx --bun이며, npm/npx Node.js 소비 경로도 지원합니다.`
  :`${identity}는 ${exports}를 제공합니다. 대상 런타임은 ${packageInfo.runtime}이고 ${packageInfo.buildCommand}로 빌드합니다. Bun/bunx를 우선 사용하며 Node/npm/npx 경로도 지원합니다. CI에서 두 소비 경로를 격리해 검증했습니다. npm 공개 발행 전이라 로컬 tarball을 사용합니다.`;
}
export function npmPackageCommands(packageInfo=NPM_PACKAGE){
 const identity=`${packageInfo.name}@${packageInfo.version}`;
 if(packageInfo.published)return ['# Preferred Bun consumer',`bun add ${identity}`,`bunx --bun --package=${identity} klic version --json`,'# npm + Node.js compatibility',`npm install ${identity}`,`npx --yes --package=${identity} klic version --json`].join('\n');
 const tarball=`https://design.klic.co.kr/absolute/path/to/${packageInfo.name}-${packageInfo.version}.tgz`;
 return ['# In a KLIC source checkout',packageInfo.buildCommand,'# Preferred Bun consumer',`bun add ${tarball}`,`bun ./node_modules/${packageInfo.name}/bin/klic.mjs version --json`,`# bunx --bun uses ${identity} after npm publication`,`bunx --bun --package=${identity} klic version --json`,'# npm + Node.js compatibility',`npm install ${tarball}`,`npx --yes --package=${tarball} klic version --json`].join('\n');
}
