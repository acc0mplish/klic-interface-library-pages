import {readdir,readFile} from 'node:fs/promises';
import {join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const root=resolve(fileURLToPath(new URL('../../..',import.meta.url)));
const publicRoot=join(root,'block-runtime/public');
const virtualId='\0klic-vue-block-assets';

export function blockAssetsPlugin(){
 let assets={};
 return {
  name:'klic-vue-block-assets',
  enforce:'pre',
  async buildStart(){
   if(process.env.KLIC_VUE_EXTERNAL_BLOCK_ASSETS==='1')return;
   for(const [directory,mime] of [['panel-previews','image/png'],['catalog','image/webp']]){
    for(const filename of await readdir(join(publicRoot,directory))){
     if(!filename.endsWith(directory==='catalog'?'.webp':'.png'))continue;
     const bytes=await readFile(join(publicRoot,directory,filename));
     assets[`${directory}/${filename}`]=`data:${mime};base64,${bytes.toString('base64')}`;
    }
   }
  },
  resolveId(id){if(id==='klic-vue-block-assets'&&process.env.KLIC_VUE_EXTERNAL_BLOCK_ASSETS!=='1')return virtualId;},
  load(id){if(id===virtualId)return `const assets=${JSON.stringify(assets)};export const blockAssetURL=path=>assets[path]??path;`;},
  transform(source,id){
   if(!id.includes('/block-runtime/src/')||!/\.(?:tsx?|mjs)$/.test(id))return;
   let code=source,prefix='';
   if(code.includes('./panel-previews/')){
    code=code.replace(/src="\.\/panel-previews\/([^"]+)"/g,(_match,filename)=>`src={blockAssetURL(${JSON.stringify(`panel-previews/${filename}`)})}`);
    prefix=`import {blockAssetURL} from 'klic-vue-block-assets';\n`;
   }
   if(code.includes('./catalog/')){
    code=code.replace(/(['"])\.\/catalog\/([a-z0-9-]+\.webp)\1/g,(_match,_quote,filename)=>`blockAssetURL(${JSON.stringify(`catalog/${filename}`)})`);
    if(!prefix)prefix=`import {blockAssetURL} from 'klic-vue-block-assets';\n`;
   }
   if(process.env.KLIC_VUE_PORTRAIT_REGISTRY&&id.endsWith('/components/PersonAvatar.tsx'))code=code.replace('backgroundImage: `url("${portrait.url}")`,','backgroundImage: portrait.url,');
   if(code===source)return;
   return {code:prefix+code,map:null};
  },
 };
}
