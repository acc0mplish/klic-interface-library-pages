<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="badge" data-kv-variant="selectable" data-klic-component="badge" class="kn-badge">
    <header data-part="heading">
      <strong>
        관심 분야
      </strong>
    </header>
    <div data-part="tags">
      <button type="button" data-klic-surface="control" data-kv-action="toggle" aria-pressed="false" data-part="btn chip">
        디자인
      </button>
      <button type="button" data-klic-surface="control" data-kv-action="toggle" aria-pressed="false" data-part="btn chip">
        개발
      </button>
      <button type="button" data-klic-surface="control" data-kv-action="toggle" aria-pressed="false" data-part="btn chip">
        리서치
      </button>
      <button type="button" data-klic-surface="control" data-kv-action="toggle" aria-pressed="false" data-part="btn chip">
        운영
      </button>
    </div>
    <p data-part="muted">
      복수의 분야를 함께 선택할 수 있습니다.
    </p>
  </div>
</template>
