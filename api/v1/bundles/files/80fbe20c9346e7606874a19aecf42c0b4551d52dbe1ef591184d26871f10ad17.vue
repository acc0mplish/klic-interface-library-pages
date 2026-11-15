<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="blockquote" class="kn-blockquote">
    <blockquote data-part="quote">
      <p>
        작은 요소가 모여 제품의 경험을 만듭니다.
      </p>
      <cite>
        KLIC · 인터페이스 설계 노트
      </cite>
    </blockquote>
  </div>
</template>
