<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="blockquote" data-kv-variant="with-context" data-klic-component="blockquote" class="kn-blockquote">
    <header data-part="heading">
      <strong>
        접근성 리뷰 메모
      </strong>
    </header>
    <blockquote data-part="quote">
      색상만으로 상태를 전달하지 않습니다.
    </blockquote>
    <p data-part="muted">
      아이콘과 명확한 상태 문구를 함께 사용하면 더 많은 사용자가 결과를 이해할 수 있습니다.
    </p>
  </div>
</template>
