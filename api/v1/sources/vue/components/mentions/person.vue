<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="mentions" data-kv-variant="person" data-klic-component="mentions" class="kn-mentions">
    <label data-part="field">
      <span>
        팀 메시지
      </span>
      <textarea rows="3" data-kv-mention-input placeholder="팀원을 언급해 보세요." data-part="textarea">
      </textarea>
    </label>
    <div class="ku-actions" data-part="actions">
      <button type="button" data-klic-surface="control" data-kv-action="mention" data-kv-value="김하늘" data-part="btn">
        @김하늘
      </button>
      <button type="button" data-klic-surface="control" data-kv-action="mention" data-kv-value="이도윤" data-part="btn">
        @이도윤
      </button>
      <button type="button" data-klic-surface="control" data-kv-action="mention" data-kv-value="박서연" data-part="btn">
        @박서연
      </button>
    </div>
  </div>
</template>
