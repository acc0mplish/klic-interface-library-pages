<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="multi-select" data-kv-variant="chip-picker" data-klic-component="multi-select" class="kn-multi-select">
    <header data-part="heading">
      <strong>
        기술 스택
      </strong>
    </header>
    <div class="ku-actions" data-part="actions">
      <button type="button" data-klic-surface="control" data-kv-action="add-tag" data-kv-value="HTML" data-part="btn">
        HTML
      </button>
      <button type="button" data-klic-surface="control" data-kv-action="add-tag" data-kv-value="CSS" data-part="btn">
        CSS
      </button>
      <button type="button" data-klic-surface="control" data-kv-action="add-tag" data-kv-value="JavaScript" data-part="btn">
        JavaScript
      </button>
      <button type="button" data-klic-surface="control" data-kv-action="add-tag" data-kv-value="React" data-part="btn">
        React
      </button>
    </div>
    <div data-klic-surface="card" data-part="panel">
      <strong>
        선택한 기술
      </strong>
      <div data-kv-tags data-part="tags">
      </div>
    </div>
  </div>
</template>
