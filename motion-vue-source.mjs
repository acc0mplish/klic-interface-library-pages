const escapeHTML=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

/** Render a Vue SFC adapter for a canonical recipe without changing its renderer. */
export function motionVueSource(recipe){
 if(!recipe?.id||!recipe?.reference?.pattern)throw new TypeError('motionVueSource requires a canonical motion recipe.');
 const moduleId=recipe.reference.route||recipe.id;
 if(!/^[a-z0-9-]+$/.test(moduleId))throw new TypeError('Motion module path is invalid.');
 const label=escapeHTML(recipe.title?.en||recipe.id);
 const attribution=recipe.source==='klic-authored'
  ? recipe.reference.collection==='klic-flowmotion'?`KLIC FlowMotion · ${recipe.id}`:`KLIC motion recipe · ${recipe.id}`
  : `Adapted motion · ${recipe.reference.id} / ${recipe.reference.pattern}`;
 return `<script setup>\nimport {useKlicMotion} from 'klic-design/motions/vue';\nimport recipe from 'klic-design/motions/${moduleId}';\nimport 'klic-design/motions/runtime.css';\n\nconst {root,error}=useKlicMotion(recipe);\n</script>\n\n<template>\n  <div ref="root" class="motion-source-stage" aria-label="${label}" />\n  <p v-if="error" class="motion-source-attribution" role="status">{{ error.message }}</p>\n  <small class="motion-source-attribution">${escapeHTML(attribution)}</small>\n</template>\n`;
}
