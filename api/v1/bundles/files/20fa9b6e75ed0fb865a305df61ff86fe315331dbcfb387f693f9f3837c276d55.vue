<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="donut-chart" data-kv-variant="composition" data-klic-component="donut-chart" class="kn-donut-chart">
    <header data-part="heading">
      <strong>
        작업 분포
      </strong>
    </header>
    <div role="img" aria-label="디자인50%, 개발30%, 리서치20%" data-part="donut donut-multi">
      <strong>
        100
        <small>
          전체 작업
        </small>
      </strong>
    </div>
    <ul data-part="list">
      <li>
        디자인 · 50건
      </li>
      <li>
        개발 · 30건
      </li>
      <li>
        리서치 · 20건
      </li>
    </ul>
  </div>
</template>
