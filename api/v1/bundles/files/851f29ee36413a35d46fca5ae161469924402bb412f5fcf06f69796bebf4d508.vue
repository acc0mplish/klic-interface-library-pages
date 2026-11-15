<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="donut-chart" data-kv-variant="storage" data-klic-component="donut-chart" class="kn-donut-chart">
    <div data-part="donut-layout">
      <div style="--kv-value:42" role="img" aria-label="저장 공간42% 사용" data-part="donut">
        <strong>
          42%
        </strong>
      </div>
      <div>
        <header data-part="heading">
          <strong>
            저장 공간
          </strong>
        </header>
        <div data-part="metric">
          <span>
            사용 중
          </span>
          <strong>
            42 GB
          </strong>
          <p data-part="muted">
            전체 100 GB 중
          </p>
        </div>
        <span data-part="badge">
          58 GB 남음
        </span>
      </div>
    </div>
  </div>
</template>
