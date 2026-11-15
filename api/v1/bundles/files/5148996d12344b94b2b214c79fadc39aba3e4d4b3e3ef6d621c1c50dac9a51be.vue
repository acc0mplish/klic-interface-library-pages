<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-publishing-target="card-base" data-klic-component="card" class="kn-card">
    <div data-part="mini-card-top">
      <span>
        이번 주 프로젝트
      </span>
      <component :is="KlicIcons.ChartNoAxesCombined" data-part="icon" />
    </div>
    <div data-part="mini-card-number">
      12
      <span>
        개
      </span>
    </div>
    <div data-part="mini-card-meta">
      <span>
        완료된 작업
      </span>
      <span data-part="badge">
        <component :is="KlicIcons.TrendingUp" data-part="icon" />
        +4
      </span>
    </div>
    <div role="img" aria-label="7개 예시 막대: 마지막 값 12" data-part="mini-bars">
      <span style="height:35%">
      </span>
      <span style="height:54%">
      </span>
      <span style="height:44%">
      </span>
      <span style="height:69%">
      </span>
      <span style="height:59%">
      </span>
      <span style="height:81%">
      </span>
      <span style="height:100%">
      </span>
    </div>
  </div>
</template>
