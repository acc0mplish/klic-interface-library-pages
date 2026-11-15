import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
export default defineConfig({root:'public',base:'./',plugins:[vue()],server:{fs:{allow:['..']}},build:{outDir:'../build',emptyOutDir:true}});
