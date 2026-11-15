<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="line-chart" data-kv-variant="comparison" data-klic-component="line-chart" class="kn-line-chart">
    <header data-part="heading">
      <strong>
        이번 주와 지난주
      </strong>
      <p data-part="muted">
        실선: 이번 주 · 점선: 지난주
      </p>
    </header>
    <svg viewBox="0 0 180 70" role="img" aria-label="이번 주 40에서 82, 지난주 35에서62로 증가" data-part="spark">
      <polyline points="0,55 30,45 60,50 90,25 120,30 150,18 180,8" fill="none" stroke="currentColor" stroke-width="3"/>
      <polyline points="0,60 30,55 60,40 90,45 120,35 150,38 180,27" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4" opacity=".5"/>
    </svg>
    <div class="ku-row" data-part="row">
      <span>
        이번 주 8,921
      </span>
      <span>
        지난주 7,908
      </span>
    </div>
  </div>
</template>
