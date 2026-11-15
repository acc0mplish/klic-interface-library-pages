import {COLOR_THEME_IDS,getColorTheme} from './color-themes.mjs';
import {MATERIAL_LABELS} from './materials.mjs';
import {DEFAULT_PREFERENCES,PREFERENCE_RANGES,normalizePreferences} from './preferences.mjs';
import {escapeHTML as esc} from './catalog.js';

const range=PREFERENCE_RANGES.glassAppearance;
const svg=(name)=>{
 const paths={
  palette:'<path d="M12 22a10 10 0 1 1 10-10c0 1.1-.9 2-2 2h-1.5a1.5 1.5 0 0 0-1.2 2.4c.5.6.7 1.1.7 1.7A3.9 3.9 0 0 1 12 22Z"/><circle cx="7.5" cy="10" r=".8"/><circle cx="11.5" cy="6.5" r=".8"/><circle cx="16" cy="8" r=".8"/>',
  check:'<path d="m5 12 4 4L19 6"/>',
  settings:'<path d="M4 21v-7m0-4V3m8 18v-9m0-4V3m8 18v-5m0-4V3"/><path d="M2 14h4m4-6h4m4 8h4"/>',
  arrow:'<path d="M5 12h14m-7-7 7 7-7 7"/>'
 };
 return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths[name]}</svg>`;
};
const swatch=(id,selected,mode,en)=>{
 const theme=getColorTheme(id),colors=theme[mode]??theme.light;
 const label=en?`Apply ${theme.name} theme`:`${theme.name} 테마 적용`;
 return `<button type="button" class="quick-theme-swatch" data-color-theme="${theme.id}" aria-label="${esc(label)}" title="${esc(theme.name)}" aria-pressed="${selected===id}"><span class="quick-theme-swatch-icon" style="--quick-theme-surface:${colors.surface};--quick-theme-panel:${colors.panel};--quick-theme-accent:${theme.source.hex}" aria-hidden="true"><i></i><i></i><i></i></span><span class="sr-only">${esc(theme.name)}</span><span class="quick-theme-check" aria-hidden="true">${svg('check')}</span></button>`;
};

export function renderQuickThemeControl(preferences={},locale='ko',idPrefix='quick',settingsHref='#settings/theme',showGlass=true){
 const p=normalizePreferences({...DEFAULT_PREFERENCES,...preferences}),value=p.glassAppearance;
 const panelId=`${idPrefix}-theme-panel`,rangeId=`${idPrefix}-glass-appearance`;
 const en=locale==='en',copy=en?{open:'Open quick theme chooser',title:'Quick theme',group:'Quick color themes',glass:'Glass appearance',clear:'Clearer',default:'Default',tint:'More tinted',settings:'Full theme settings',preview:'Live Liquid Glass preview',previewTitle:'Liquid Glass preview',glassHint:'See the change below. Glass materials use this setting; Flat stays opaque.'}:{open:'빠른 테마 변경',title:'빠른 테마',group:'색상 테마 빠른 선택',glass:'유리 외관',clear:'더 투명',default:'기본',tint:'더 짙게',settings:'전체 테마 설정',preview:'Liquid Glass 실시간 미리보기',previewTitle:'Liquid Glass 미리보기',glassHint:'아래 미리보기에서 바로 확인하세요. 실제 화면은 Glass 계열에서 반영되고 Flat은 불투명합니다.'};
 const mode=p.theme==='dark'?'dark':'light';
 const materialStatus=p.material==='flat'?(en?'Current screen: Flat · opaque':'현재 화면 소재: Flat · 불투명'):(en?`Current screen: ${MATERIAL_LABELS[p.material]} · applied`:`현재 화면 소재: ${MATERIAL_LABELS[p.material]} · 적용 중`);
 const glassPreview=showGlass?`<div class="quick-glass-preview-meta"><span>${copy.previewTitle}</span><output data-preference-output="glassAppearance">${value}%</output></div><div class="quick-glass-preview-stage" role="img" aria-label="${copy.preview}"><span class="quick-glass-preview-orb quick-glass-preview-orb-a" aria-hidden="true"></span><span class="quick-glass-preview-orb quick-glass-preview-orb-b" aria-hidden="true"></span><div class="quick-glass-preview-surface" data-material="liquid-glass" data-klic-surface="card" aria-hidden="true"><span class="quick-glass-preview-avatar"></span><span class="quick-glass-preview-lines"><i></i><i></i></span><span class="quick-glass-preview-chip"></span></div></div>`:'';
 const glassControl=showGlass?`<div class="quick-theme-glass"><label class="quick-theme-range-heading" for="${rangeId}"><strong>${copy.glass}</strong><output for="${rangeId}" data-preference-output="glassAppearance">${value}%</output></label><input id="${rangeId}" type="range" data-preference="glassAppearance" min="${range.min}" max="${range.max}" step="${range.step}" value="${value}" aria-label="${copy.glass}" aria-valuetext="${value}%"><div class="quick-theme-range-labels" aria-hidden="true"><span>${copy.clear}</span><span>${copy.default}</span><span>${copy.tint}</span></div>${glassPreview}<small class="quick-theme-material-state" data-glass-material-status aria-live="polite">${materialStatus}</small><small class="quick-theme-glass-hint">${copy.glassHint}</small></div>`:'';
 return `<details class="quick-theme-picker" data-quick-theme-picker><summary class="icon-button quick-theme-trigger" aria-label="${copy.open}" title="${copy.open}" aria-controls="${panelId}">${svg('palette')}</summary><section class="quick-theme-panel" id="${panelId}" aria-label="${copy.open}"><div class="quick-theme-heading"><div><span class="eyebrow">KLIC / APPEARANCE</span><strong>${copy.title}</strong></div><span data-quick-theme-name>${esc(getColorTheme(p.colorTheme).name)}</span></div><div class="quick-theme-grid" role="group" aria-label="${copy.group}">${COLOR_THEME_IDS.map(id=>swatch(id,p.colorTheme,mode,en)).join('')}</div>${glassControl}<a class="quick-theme-settings" href="${esc(settingsHref)}">${svg('settings')}<span>${copy.settings}</span>${svg('arrow')}</a></section></details>`;
}
