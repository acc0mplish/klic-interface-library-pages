<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="sparkline" data-kv-variant="threshold" data-klic-component="sparkline" class="kn-sparkline">
    <header data-part="heading">
      <strong>
        응답 시간
      </strong>
      <p data-part="muted">
        목표 200ms 이하
      </p>
    </header>
    <svg viewBox="0 0 180 60" role="img" aria-label="응답 시간 추이: 최근170ms, 목표200ms" data-part="spark">
      <path d="M0 25H180" stroke="currentColor" stroke-dasharray="4 4" opacity=".4"/>
      <polyline points="0,15 25,20 50,31 75,27 100,38 125,33 150,41 180,44" stroke="currentColor" fill="none" stroke-width="3"/>
    </svg>
    <div class="ku-row" data-part="row">
      <span>
        최근 170ms
      </span>
      <span>
        <span data-part="badge">
          목표 충족
        </span>
      </span>
    </div>
  </div>
</template>
