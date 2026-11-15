<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="blockquote" data-kv-variant="callout" data-klic-component="blockquote" class="kn-blockquote">
    <p data-part="muted">
      디자인 시스템을 함께 운영할 때 기억할 원칙
    </p>
    <blockquote data-part="callout">
      <component :is="KlicIcons.Quote" data-part="icon" aria-hidden="true" />
      <strong>
        재사용하기 쉬운 구조는 명확한 이름에서 시작합니다.
      </strong>
    </blockquote>
    <p data-part="muted">
      컴포넌트의 목적을 먼저 설명하세요.
    </p>
  </div>
</template>
