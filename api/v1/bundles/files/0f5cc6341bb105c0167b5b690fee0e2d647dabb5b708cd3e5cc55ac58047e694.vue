<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="tag-input" data-kv-variant="topics" data-klic-component="tag-input" class="kn-tag-input">
    <header data-part="heading">
      <strong>
        문서 주제
      </strong>
    </header>
    <form data-kv-tag-form class="ku-inline" data-part="inline">
      <input aria-label="추가할 주제" required placeholder="주제 입력" data-part="input">
      <button data-klic-surface="control" data-part="btn">
        추가
      </button>
    </form>
    <div data-kv-tags data-part="tags">
      <span data-part="chip">
        디자인
        <button type="button" data-klic-surface="control" data-kv-action="remove" aria-label="디자인 삭제" data-part="btn">
          ×
        </button>
      </span>
      <span data-part="chip">
        컴포넌트
        <button type="button" data-klic-surface="control" data-kv-action="remove" aria-label="컴포넌트 삭제" data-part="btn">
          ×
        </button>
      </span>
    </div>
  </div>
</template>
