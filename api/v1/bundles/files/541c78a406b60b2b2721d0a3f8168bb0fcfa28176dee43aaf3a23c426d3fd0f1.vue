<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="link" data-kv-variant="external" data-klic-component="link" class="kn-link">
    <header data-part="heading">
      <strong>
        네이티브 웹 표준
      </strong>
      <p data-part="muted">
        입력과 키보드 동작의 기반을 확인하세요.
      </p>
    </header>
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer" data-part="text-link link">
      HTML 문서 읽기
      <component :is="KlicIcons.ExternalLink" data-part="icon" aria-hidden="true" />
      <span data-part="sr-only">
        새 탭
      </span>
    </a>
  </div>
</template>
