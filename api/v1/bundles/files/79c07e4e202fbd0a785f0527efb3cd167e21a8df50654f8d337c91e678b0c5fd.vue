<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="tag-input" data-kv-variant="people" data-klic-component="tag-input" class="kn-tag-input">
    <header data-part="heading">
      <strong>
        수신자
      </strong>
      <p data-part="muted">
        이메일은 이 예제에서만 저장됩니다.
      </p>
    </header>
    <form data-kv-tag-form class="ku-inline" data-part="inline">
      <input type="email" aria-label="수신자 이메일" required placeholder="name@example.com" data-part="input">
      <button data-klic-surface="control" data-part="btn">
        추가
      </button>
    </form>
    <div data-kv-tags data-part="tags">
    </div>
  </div>
</template>
