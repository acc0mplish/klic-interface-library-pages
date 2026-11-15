<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="mentions" data-kv-variant="issue" data-klic-component="mentions" class="kn-mentions">
    <header data-part="heading">
      <strong>
        이슈 KLIC-042
      </strong>
      <p data-part="muted">
        키보드 탐색 개선
      </p>
    </header>
    <label data-part="field">
      <span>
        업데이트 메모
      </span>
      <textarea rows="3" data-kv-mention-input data-part="textarea">
        #KLIC-042
      </textarea>
    </label>
    <button type="button" data-klic-surface="control" data-kv-action="mention" data-kv-value="이도윤" data-part="btn">
      담당자 언급
    </button>
  </div>
</template>
