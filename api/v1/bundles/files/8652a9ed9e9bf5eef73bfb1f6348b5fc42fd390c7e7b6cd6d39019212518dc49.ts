import {createApp,h} from 'vue';
import {Block} from '../../packages/klic/src/blocks-vue';
import '../../block-runtime/src/index.css';

const fallback='support-tickets';
const requested=new URLSearchParams(location.search).get('id')||document.querySelector('meta[name="klic-block-id"]')?.getAttribute('content')||fallback;
const id=/^[a-z0-9-]{1,90}$/.test(requested)?requested:fallback;
const mode=new URLSearchParams(location.search).get('mode')==='dark'?'dark':'light';
const root=document.getElementById('app');
if(!root)throw new Error('KLIC Vue workspace is missing #app.');

createApp({render:()=>h(Block,{id,mode})}).mount(root);
