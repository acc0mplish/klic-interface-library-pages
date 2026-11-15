<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="sparkline" data-kv-variant="revenue" data-klic-component="sparkline" class="kn-sparkline">
    <div class="ku-row" data-part="row">
      <span>
        <div data-part="metric">
          <span>
            이번 주 매출
          </span>
          <strong>
            ₩124만
          </strong>
          <p data-part="muted">
            +8.2% 증가
          </p>
        </div>
      </span>
      <span>
        <svg viewBox="0 0 180 56" role="img" aria-label="기간별 추세: 40, 33, 38, 21, 29, 12, 17, 8" data-part="spark">
          <polyline points="0,40 25,33 50,38 75,21 100,29 125,12 150,17 175,8" fill="none" stroke="currentColor" stroke-width="3"/>
        </svg>
      </span>
    </div>
    <p data-part="muted">
      최근 7일의 일별 매출 추이
    </p>
  </div>
</template>
