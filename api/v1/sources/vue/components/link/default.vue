<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="link" class="kn-link">
    <div data-part="stack" class="ku-stack">
      <a href="#tokens" data-part="link">
        디자인 토큰 살펴보기
        <component :is="KlicIcons.ArrowRight" data-part="icon" aria-hidden="true" />
      </a>
      <a href="#fonts" data-part="link">
        폰트 라이브러리
        <component :is="KlicIcons.ArrowUpRight" data-part="icon" aria-hidden="true" />
      </a>
      <a href="https://klic.co.kr/" target="_blank" rel="noopener" data-part="link">
        KLIC 회사 사이트 · 새 창
        <component :is="KlicIcons.ExternalLink" data-part="icon" aria-hidden="true" />
      </a>
    </div>
  </div>
</template>
