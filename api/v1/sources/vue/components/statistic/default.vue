<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="statistic" class="kn-statistic">
    <div data-part="stat">
      <small>
        이번 달 활성 프로젝트
      </small>
      <strong>
        128
        <em>
          개
        </em>
      </strong>
      <span>
        <component :is="KlicIcons.TrendingUp" data-part="icon" aria-hidden="true" />
        전월 대비 12개 증가
      </span>
      <p>
        2026년 10월 · 샘플 데이터
      </p>
    </div>
  </div>
</template>
