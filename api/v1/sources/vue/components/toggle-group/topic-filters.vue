<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="toggle-group" data-kv-variant="topic-filters" data-klic-component="toggle-group" class="kn-toggle-group">
    <header data-part="heading">
      <strong>
        어떤 자료를 볼까요?
      </strong>
    </header>
    <div role="group" aria-label="자료 분류" data-part="tags">
      <button type="button" data-klic-surface="control" data-kv-action="toggle" aria-pressed="false" data-part="btn">
        디자인
      </button>
      <button type="button" data-klic-surface="control" data-kv-action="toggle" aria-pressed="false" data-part="btn">
        개발
      </button>
      <button type="button" data-klic-surface="control" data-kv-action="toggle" aria-pressed="false" data-part="btn">
        리서치
      </button>
      <button type="button" data-klic-surface="control" data-kv-action="toggle" aria-pressed="false" data-part="btn">
        운영
      </button>
      <button type="button" data-klic-surface="control" data-kv-action="toggle" aria-pressed="false" data-part="btn">
        가이드
      </button>
    </div>
    <p data-part="muted">
      관심 있는 분류를 여러 개 선택하세요.
    </p>
  </div>
</template>
