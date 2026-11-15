<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="link" data-kv-variant="download-data" data-klic-component="link" class="kn-link">
    <header data-part="heading">
      <strong>
        샘플 데이터
      </strong>
      <p data-part="muted">
        개인정보가 없는 프로젝트 목록 CSV입니다.
      </p>
    </header>
    <a download="klic-projects.csv" href="data:text/csv;charset=utf-8,name%2Cstatus%0AKLIC%2CReview%0AAtlas%2CDone" data-part="text-link link">
      <component :is="KlicIcons.Download" data-part="icon" aria-hidden="true" />
      CSV 다운로드
    </a>
  </div>
</template>
