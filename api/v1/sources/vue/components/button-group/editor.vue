<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="button-group" data-kv-variant="editor" data-klic-component="button-group" class="kn-button-group">
    <header data-part="heading">
      <strong>
        문서 서식
      </strong>
    </header>
    <div role="group" aria-label="문서 서식" class="ku-actions ku-joined" data-part="actions joined">
      <button type="button" data-klic-surface="control" data-kv-action="toggle" aria-pressed="false" data-part="btn">
        굵게
      </button>
      <button type="button" data-klic-surface="control" data-kv-action="toggle" aria-pressed="false" data-part="btn">
        기울임
      </button>
      <button type="button" data-klic-surface="control" data-kv-action="toggle" aria-pressed="false" data-part="btn">
        밑줄
      </button>
    </div>
    <p data-part="muted">
      각 서식은 독립적으로 켜고 끌 수 있습니다.
    </p>
  </div>
</template>
