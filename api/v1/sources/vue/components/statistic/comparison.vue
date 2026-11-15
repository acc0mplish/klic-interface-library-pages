<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="statistic" data-kv-variant="comparison" data-klic-component="statistic" class="kn-statistic">
    <div data-part="metric">
      <span>
        월간 활성 사용자
      </span>
      <strong>
        12,840
      </strong>
      <p data-part="muted">
        지난달 대비 +14.2%
      </p>
    </div>
    <svg viewBox="0 0 180 56" role="img" aria-label="기간별 추세: 40, 33, 38, 21, 29, 12, 17, 8" data-part="spark">
      <polyline points="0,40 25,33 50,38 75,21 100,29 125,12 150,17 175,8" fill="none" stroke="currentColor" stroke-width="3"/>
    </svg>
  </div>
</template>
