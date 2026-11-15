<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="aspect-ratio" class="kn-aspect-ratio">
    <div data-part="aspect">
      <img src="./block-runtime/catalog/course-02.webp" alt="데이터 분석 대시보드" width="640" height="400" loading="lazy" >
      <span>
        16 : 9
      </span>
    </div>
  </div>
</template>
