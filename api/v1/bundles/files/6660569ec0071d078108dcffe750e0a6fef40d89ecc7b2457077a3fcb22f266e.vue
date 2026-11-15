<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="tag-input" data-kv-variant="editable" data-klic-component="tag-input" class="kn-tag-input">
    <header data-part="heading">
      <strong>
        프로젝트 기술
      </strong>
    </header>
    <div data-kv-tags data-part="tags">
      <span data-part="chip">
        HTML
        <button type="button" data-klic-surface="control" data-kv-action="remove" aria-label="HTML 삭제" data-part="btn">
          ×
        </button>
      </span>
      <span data-part="chip">
        CSS
        <button type="button" data-klic-surface="control" data-kv-action="remove" aria-label="CSS 삭제" data-part="btn">
          ×
        </button>
      </span>
      <span data-part="chip">
        JavaScript
        <button type="button" data-klic-surface="control" data-kv-action="remove" aria-label="JavaScript 삭제" data-part="btn">
          ×
        </button>
      </span>
    </div>
    <form data-kv-tag-form class="ku-inline" data-part="inline">
      <input aria-label="기술 이름" required placeholder="새 기술" data-part="input">
      <button data-klic-surface="control" data-part="btn">
        등록
      </button>
    </form>
    <p data-part="muted">
      각 태그의 삭제 버튼으로 제거할 수 있습니다.
    </p>
  </div>
</template>
