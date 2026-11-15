<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="line-chart" data-kv-variant="trend" data-klic-component="line-chart" class="kn-line-chart">
    <div data-part="metric">
      <span>
        주간 방문자
      </span>
      <strong>
        8,921
      </strong>
      <p data-part="muted">
        지난주 대비 +12.8%
      </p>
    </div>
    <svg viewBox="0 0 180 56" role="img" aria-label="기간별 추세: 46, 40, 27, 33, 19, 24, 10, 5" data-part="spark">
      <polyline points="0,46 25,40 50,27 75,33 100,19 125,24 150,10 175,5" fill="none" stroke="currentColor" stroke-width="3"/>
    </svg>
    <div class="ku-row" data-part="row">
      <span>
        월
      </span>
      <span>
        일
      </span>
    </div>
  </div>
</template>
