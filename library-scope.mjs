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
 if(locale==='en')return `KLIC provides HTML demos and the ${identity} token/theme SDK, CSS, TypeScript and CLI package. ${packageInfo.published?`It is available from npm and Bun; run the CLI with npx or bunx.`:`Build it with ${packageInfo.buildCommand}. npm/Bun installation and npx/bunx consumer runs have passed local checks, but the package is not published to npm yet.`} Components and blocks are reference source workspaces, not separate React component APIs.`;
 return `HTML 데모와 ${identity} 토큰·테마 SDK, CSS·TypeScript·CLI 패키지를 제공합니다. ${packageInfo.published?`npm·Bun으로 설치하고 npx·bunx로 CLI를 실행할 수 있습니다.`:`${packageInfo.buildCommand}로 빌드합니다. npm/Bun 설치와 npx/bunx 소비 경로는 로컬 검증했지만, 아직 npm 공개 발행 전입니다.`} 컴포넌트·블록은 별도 React API가 아닌 참고 소스 작업 폴더입니다.`;
}
export function npmPackageGuidance(locale='ko',packageInfo=NPM_PACKAGE){
 const identity=`${packageInfo.name}@${packageInfo.version}`,exports=packageInfo.exports.join(', ');
 if(locale==='en')return packageInfo.published
  ?`${identity} provides ${exports}. It is built with ${packageInfo.buildCommand} and supports ${packageInfo.runtime}. Install from npm or Bun, then run the CLI with npx or bunx --bun.`
  :`${identity} provides ${exports}. It targets ${packageInfo.runtime} and is built with ${packageInfo.buildCommand}. CI checked npm/Bun tarball installs and npx (Node)/bunx --bun (Bun) cold and warm runs against an isolated local registry. The package is not published to npm yet, so a local tarball path is currently required.`;
 return packageInfo.published
  ?`${identity} provides ${exports}. The package uses ${packageInfo.buildCommand} and supports ${packageInfo.runtime}. npm/Bun installs and npx (Node)/bunx --bun (Bun) runs are checked in CI.`
  :`${identity}는 ${exports}를 제공합니다. 소비 런타임은 ${packageInfo.runtime}, 빌드는 ${packageInfo.buildCommand}입니다. CI에서 npm·Bun tarball 설치와 npx(Node)·bunx --bun(Bun)의 cold/warm 실행을 격리된 로컬 registry로 확인했습니다. npm 공개 발행 전이라 지금은 로컬 tarball 경로가 있어야 설치할 수 있습니다.`;
}
export function npmPackageCommands(packageInfo=NPM_PACKAGE){
 const identity=`${packageInfo.name}@${packageInfo.version}`;
 if(packageInfo.published)return [`npm install ${identity}`,`npx --yes --package=${identity} klic version --json`,`bun add ${identity}`,`bunx --bun --package=${identity} klic version --json`].join('\n');
 const tarball=`https://design.klic.co.kr/absolute/path/to/${packageInfo.name}-${packageInfo.version}.tgz`;
 return ['# In a KLIC source checkout',packageInfo.buildCommand,'# npm + Node consumer',`npm install ${tarball}`,`npx --yes --package=${tarball} klic version --json`,'# Bun consumer',`bun add ${tarball}`,`# bunx --bun uses ${identity} after npm publication`,`bunx --bun --package=${identity} klic version --json`].join('\n');
}
