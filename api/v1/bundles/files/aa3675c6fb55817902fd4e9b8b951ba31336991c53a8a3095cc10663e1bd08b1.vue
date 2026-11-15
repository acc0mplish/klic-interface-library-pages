<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="statistic" data-kv-variant="live-status" data-klic-component="statistic" class="kn-statistic">
    <div class="ku-row" data-part="row">
      <span>
        <span data-part="badge">
          ● 정상 운영
        </span>
      </span>
      <span>
        <time>
          방금 전
        </time>
      </span>
    </div>
    <div class="ku-grid-2" data-part="grid-2">
      <div data-part="metric">
        <span>
          가동률
        </span>
        <strong>
          99.98%
        </strong>
        <p data-part="muted">
        </p>
      </div>
      <div data-part="metric">
        <span>
          평균 응답
        </span>
        <strong>
          170ms
        </strong>
        <p data-part="muted">
        </p>
      </div>
    </div>
    <button type="button" data-klic-surface="control" data-kv-action="retry"  data-part="btn">
      상태 새로고침
    </button>
    <output aria-live="polite" data-part="output">
    </output>
  </div>
</template>
