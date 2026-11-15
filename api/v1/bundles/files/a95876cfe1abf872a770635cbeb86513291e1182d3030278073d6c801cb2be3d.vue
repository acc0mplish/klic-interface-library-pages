<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="skeleton" data-kv-variant="media-card" data-klic-component="skeleton" class="kn-skeleton">
    <div data-klic-surface="card" role="status" aria-label="콘텐츠 불러오는 중" data-part="card">
      <div data-part="skeleton sk-image">
      </div>
      <div data-part="card-body">
        <span data-part="skeleton sk-line">
        </span>
        <span data-part="skeleton sk-line sk-short">
        </span>
        <p data-part="muted">
          콘텐츠를 준비하고 있습니다.
        </p>
      </div>
    </div>
  </div>
</template>
