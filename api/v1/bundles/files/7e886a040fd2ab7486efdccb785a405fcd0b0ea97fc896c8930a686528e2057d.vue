<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="typography" data-kv-variant="specimen" data-klic-component="typography" class="kn-typography">
    <div data-part="type-scale">
      <h2>
        페이지 제목
      </h2>
      <h3>
        섹션 제목
      </h3>
      <p>
        설명과 내용을 전달하는 본문입니다.
      </p>
      <small>
        작은 보조 설명 · 12px
      </small>
      <code>
        font-family: inherit;
      </code>
    </div>
  </div>
</template>
