<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="password-input" data-kv-variant="reveal" data-klic-component="password-input" class="kn-password-input">
    <label data-part="field">
      <span>
        비밀번호
      </span>
      <span data-klic-surface="field" data-part="input-group">
        <input type="password" autocomplete="new-password" aria-label="비밀번호" placeholder="비밀번호 입력" data-part="input">
        <button type="button" data-klic-surface="control" data-kv-action="password" aria-pressed="false" data-part="btn">
          표시
        </button>
      </span>
    </label>
    <p data-part="muted">
      공용 장소에서는 비밀번호 표시를 주의하세요.
    </p>
  </div>
</template>
