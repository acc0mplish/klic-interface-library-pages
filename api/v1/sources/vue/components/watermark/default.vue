<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="watermark" class="kn-watermark">
    <div data-part="watermark">
      <span aria-hidden="true">
        KLIC · INTERNAL
        <br>
        KLIC · INTERNAL
        <br>
        KLIC · INTERNAL
      </span>
      <strong>
        팀 내부 문서
      </strong>
      <p>
        프로젝트 검토 자료
        <br>
        외부 공유 전 확인하세요.
      </p>
    </div>
  </div>
</template>
