<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="bar-chart" data-kv-variant="horizontal" data-klic-component="bar-chart" class="kn-bar-chart">
    <header data-part="heading">
      <strong>
        분야별 작업 분포
      </strong>
    </header>
    <label data-part="progress-label">
      제품 디자인
      <span>
        72%
      </span>
      <progress max="100" value="72">
        72%
      </progress>
    </label>
    <label data-part="progress-label">
      프론트엔드
      <span>
        58%
      </span>
      <progress max="100" value="58">
        58%
      </progress>
    </label>
    <label data-part="progress-label">
      리서치
      <span>
        35%
      </span>
      <progress max="100" value="35">
        35%
      </progress>
    </label>
    <label data-part="progress-label">
      운영
      <span>
        24%
      </span>
      <progress max="100" value="24">
        24%
      </progress>
    </label>
  </div>
</template>
