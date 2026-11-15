<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="bar-chart" data-kv-variant="stacked" data-klic-component="bar-chart" class="kn-bar-chart">
    <header data-part="heading">
      <strong>
        작업 100건의 구성
      </strong>
    </header>
    <div role="img" aria-label="완료 62, 진행 26, 대기12" data-part="stack-bar">
      <span style="flex:62">
        62
      </span>
      <span style="flex:26">
        26
      </span>
      <span style="flex:12">
        12
      </span>
    </div>
    <ul data-part="list">
      <li>
        완료 · 62건
      </li>
      <li>
        진행 · 26건
      </li>
      <li>
        대기 · 12건
      </li>
    </ul>
  </div>
</template>
