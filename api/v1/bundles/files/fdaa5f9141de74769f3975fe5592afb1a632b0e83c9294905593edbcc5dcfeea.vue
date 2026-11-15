<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="tag-input" data-kv-variant="suggested" data-klic-component="tag-input" class="kn-tag-input">
    <header data-part="heading">
      <strong>
        추천 키워드
      </strong>
    </header>
    <div class="ku-actions" data-part="actions">
      <button type="button" data-klic-surface="control" data-kv-action="add-tag" data-kv-value="접근성" data-part="btn">
        접근성
      </button>
      <button type="button" data-klic-surface="control" data-kv-action="add-tag" data-kv-value="디자인 토큰" data-part="btn">
        디자인 토큰
      </button>
      <button type="button" data-klic-surface="control" data-kv-action="add-tag" data-kv-value="반응형" data-part="btn">
        반응형
      </button>
    </div>
    <div data-kv-tags data-part="tags">
    </div>
  </div>
</template>
