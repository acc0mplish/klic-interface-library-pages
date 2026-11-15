import {defineConfig} from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import tailwindcss from '@tailwindcss/vite';
import {fileURLToPath} from 'node:url';
import {resolve} from 'node:path';
import reactJsxAdapter from './src/compat/react-jsx-adapter.mjs';
import {blockAssetsPlugin} from './src/compat/block-assets.mjs';

const root=fileURLToPath(new URL('.',import.meta.url));
const reactCompat=resolve(root,'src/compat/react-compat.ts');
const portraitRegistry=process.env.KLIC_VUE_PORTRAIT_REGISTRY||resolve(root,'../block-runtime/public/portraits/registry.mjs');
const externalAssetMap=process.env.KLIC_VUE_EXTERNAL_BLOCK_ASSETS==='1';
const workspaceMode=process.env.KLIC_VUE_WORKSPACE==='1';

export default defineConfig({
 root,
 base:'./',
 plugins:[blockAssetsPlugin(),vueJsx({tsTransform:'built-in',babelPlugins:[reactJsxAdapter]}),...(workspaceMode?[tailwindcss()]:[])],
 resolve:{
  alias:[
   {find:/^react$/,replacement:reactCompat},
   {find:'klic-vue-compat',replacement:reactCompat},
   {find:/^@ui-sdk\/react\/dialog$/,replacement:resolve(root,'src/compat/dialog-compat.ts')},
   {find:/^framer-motion$/,replacement:resolve(root,'src/compat/framer-motion.ts')},
   {find:/^lucide-react$/,replacement:resolve(root,'src/compat/lucide-bridge.ts')},
   {find:/(?:\.\.\/)+public\/portraits\/registry\.mjs$/,replacement:portraitRegistry},
  ],
  dedupe:['vue'],
 },
 server:{fs:{allow:[root,resolve(root,'..'),resolve(root,'../block-runtime'),resolve(root,'../packages')]}},
 build:workspaceMode?{outDir:'../build',emptyOutDir:true}:{
  lib:{entry:resolve(root,'src/library.ts'),name:'KlicVueBlocks',formats:['es'],fileName:'blocks-vue',cssFileName:'blocks-vue'},
  cssCodeSplit:false,
  emptyOutDir:false,
  rollupOptions:{external:['vue','@lucide/vue',...(externalAssetMap?['klic-vue-block-assets']:[])],output:{entryFileNames:'blocks-vue.js',chunkFileNames:'blocks-vue-chunks/[name]-[hash].js',assetFileNames:'blocks-vue-assets/[name]-[hash][extname]',paths:{'klic-vue-block-assets':'../block-assets.js'}}},
 },
});
