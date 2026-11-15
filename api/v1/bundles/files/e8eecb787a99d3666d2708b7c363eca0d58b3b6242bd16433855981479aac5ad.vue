<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="mentions" data-kv-variant="comment-thread" data-klic-component="mentions" class="kn-mentions">
    <div class="ku-row" data-part="row">
      <span>
        <span aria-label="서" data-part="avatar">
          서
        </span>
      </span>
      <span>
        <strong>
          박서연
        </strong>
        · 10분 전
      </span>
    </div>
    <p data-part="muted">
      새 가이드 검토 부탁드려요.
    </p>
    <label data-part="field">
      <span>
        답글
      </span>
      <textarea rows="2" data-kv-mention-input data-part="textarea">
      </textarea>
    </label>
    <button type="button" data-klic-surface="control" data-kv-action="mention" data-kv-value="김하늘" data-part="btn">
      @김하늘 추가
    </button>
  </div>
</template>
