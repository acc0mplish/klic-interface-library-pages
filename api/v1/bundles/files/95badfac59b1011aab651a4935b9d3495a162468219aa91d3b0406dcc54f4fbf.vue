<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="skeleton" data-kv-variant="form" data-klic-component="skeleton" class="kn-skeleton">
    <div data-klic-surface="card" role="status" aria-label="설정 불러오는 중" data-part="panel">
      <span data-part="skeleton sk-line sk-short">
      </span>
      <span data-part="skeleton sk-field">
      </span>
      <span data-part="skeleton sk-line sk-short">
      </span>
      <span data-part="skeleton sk-field">
      </span>
      <span data-part="skeleton sk-button">
      </span>
      <p data-part="muted">
        설정 화면을 준비하고 있습니다.
      </p>
    </div>
  </div>
</template>
