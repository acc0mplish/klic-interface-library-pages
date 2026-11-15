<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="input" data-kv-variant="url" data-klic-component="input" class="kn-input">
    <form data-kv-form>
      <label data-part="field">
        <span>
          워크스페이스 주소
        </span>
        <span data-klic-surface="field" data-part="input-group">
          <span>
            https://
          </span>
          <input aria-label="워크스페이스 도메인" required placeholder="team.example.com" data-part="input">
        </span>
      </label>
      <p data-part="muted">
        도메인 이름만 입력하세요.
      </p>
      <button type="submit" class="kv-primary" data-part="btn">
        주소 적용
      </button>
      <output aria-live="polite" data-part="output">
      </output>
    </form>
  </div>
</template>
