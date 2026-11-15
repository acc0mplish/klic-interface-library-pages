import {createTokens,resolveTokens,formatValue} from './tokens.mjs';
import {COLOR_THEME_IDS,DEFAULT_COLOR_THEME_ID} from './color-themes.mjs';
import {readPreferences,normalizePreferences,resolveTheme,PREFERENCE_KEY} from './preferences.mjs';
import {renderQuickThemeControl} from './quick-theme-control.mjs';
import {syncColorThemeSettings} from './color-theme-settings.mjs';
export const themeBoot=`<script>try{const p=JSON.parse(localStorage.getItem('klic-appearance-v1')||'null'),t=p?.theme||localStorage.getItem('klic-theme')||'system';document.documentElement.dataset.colorTheme=${JSON.stringify(COLOR_THEME_IDS)}.includes(p?.colorTheme)?p.colorTheme:${JSON.stringify(DEFAULT_COLOR_THEME_ID)};document.documentElement.dataset.theme=t==='dark'||t==='system'&&matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'}catch{}</script>`;
export function themeControl(locale='ko'){return `<button type="button" class="ka-theme-toggle" data-public-theme data-action="theme" aria-label="${locale==='en'?'Switch to dark mode':'다크 모드로 전환'}"><svg class="theme-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/></svg><svg class="theme-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M20 15.5A9 9 0 0 1 8.5 4 9 9 0 1 0 20 15.5Z"/></svg></button>`;}
export function syncThemeControls(doc=document){const dark=doc.documentElement.dataset.theme==='dark',en=doc.documentElement.lang==='en';for(const b of doc.querySelectorAll('[data-public-theme]')){b.removeAttribute?.('aria-pressed');b.setAttribute('aria-label',en?(dark?'Switch to light mode':'Switch to dark mode'):(dark?'라이트 모드로 전환':'다크 모드로 전환'));b.title=b.getAttribute('aria-label');}}
// Public pages need semantic and showcase colors for the selected palette in both modes.
// Keep code-owned aliases resolved through the canonical graph, rather than duplicating palettes.
export function publicColorCSS(preferences={}){
 const p=normalizePreferences(preferences);
 return ['light','dark'].map(mode=>{
  const tokens=createTokens('a',mode,p),resolved=resolveTokens(tokens);
  const declarations=Object.keys(tokens).filter(path=>tokens[path].$type==='color'&&(path.startsWith('klic.semantic.color.')||path.startsWith('klic.component.showcase.color.'))).sort().map(path=>`--${path.replaceAll('.','-')}:${formatValue(resolved[path])};`).join('');
  return `${mode==='light'?':root':':root[data-theme="dark"]'}{${declarations}}`;
 }).join('\n');
}
function applyPublicColors(doc,preferences){
 doc.documentElement.dataset.colorTheme=preferences.colorTheme;
 // Older integrations and minimal test documents provide only dataset and listeners.
 if(typeof doc.createElement!=='function')return;
 let style=doc.getElementById?.('klic-public-colors');
 if(!style){style=doc.createElement('style');style.id='klic-public-colors';const host=doc.head??doc.documentElement;if(typeof host?.appendChild!=='function')return;host.appendChild(style);}
 style.textContent=publicColorCSS(preferences);
}
export function initPublicTheme(doc=document,storage=globalThis.localStorage){
 let preferences=readPreferences(storage);
 const queryAll=selector=>doc.querySelectorAll?.(selector)||[];
 const resolved=()=>({...preferences,theme:doc.documentElement.dataset.theme||resolveTheme(preferences,globalThis.matchMedia?.('(prefers-color-scheme:dark)').matches||false)});
 const syncQuick=()=>{
  const appearance=resolved(),locale=doc.documentElement.lang==='en'?'en':'ko';
  for(const host of queryAll('[data-quick-theme-host]'))if(!host.querySelector?.('[data-quick-theme-picker]'))host.innerHTML=renderQuickThemeControl(appearance,locale,'public',host.dataset?.settingsHref||'#settings/theme',false);
  if(typeof doc.querySelector==='function')syncColorThemeSettings(doc,appearance);
 };
 const update=(patch,{legacyTheme}={})=>{
  preferences=normalizePreferences({...readPreferences(storage),...patch});
  if(Object.hasOwn(patch,'theme'))doc.documentElement.dataset.theme=resolveTheme(preferences,globalThis.matchMedia?.('(prefers-color-scheme:dark)').matches||false);
  if(Object.hasOwn(patch,'theme')||Object.hasOwn(patch,'colorTheme'))applyPublicColors(doc,preferences);
  syncThemeControls(doc);syncQuick();
  try{storage.setItem(PREFERENCE_KEY,JSON.stringify(preferences));if(legacyTheme)storage.setItem('klic-theme',legacyTheme);}catch{}
 };
 doc.documentElement.dataset.theme=resolveTheme(preferences,globalThis.matchMedia?.('(prefers-color-scheme:dark)').matches||false);
 applyPublicColors(doc,preferences);syncThemeControls(doc);syncQuick();
 doc.addEventListener('click',event=>{
  for(const picker of queryAll('[data-quick-theme-picker]'))if(picker.open&&!picker.contains?.(event.target))picker.open=false;
  const color=event.target.closest?.('button[data-color-theme]'),colorTheme=color?.dataset?.colorTheme;
  if(COLOR_THEME_IDS.includes(colorTheme)){update({colorTheme});return;}
  if(event.target.closest?.('.quick-theme-settings')){const picker=event.target.closest('.quick-theme-picker');if(picker)picker.open=false;}
  if(!event.target.closest?.('[data-public-theme]'))return;
  const next=doc.documentElement.dataset.theme==='dark'?'light':'dark';update({theme:next},{legacyTheme:next});
 });
 doc.addEventListener('keydown',event=>{
  if(event.key!=='Escape'||event.defaultPrevented||event.isComposing||event.keyCode===229||doc.querySelector?.('dialog[open]'))return;
  const picker=[...queryAll('[data-quick-theme-picker]')].reverse().find(item=>item.open);if(!picker)return;
  picker.open=false;picker.querySelector?.('summary')?.focus();event.preventDefault();event.stopPropagation?.();
 });
}
