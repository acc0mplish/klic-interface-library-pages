<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="password-input" data-kv-variant="change" data-klic-component="password-input" class="kn-password-input">
    <form data-kv-form>
      <label data-part="field">
        <span>
          현재 비밀번호
        </span>
        <input type="password" value="" required autocomplete="current-password" data-part="input">
      </label>
      <label data-part="field">
        <span>
          새 비밀번호
        </span>
        <input type="password" value="" required minlength="8" autocomplete="new-password" data-part="input">
      </label>
      <button type="submit" class="kv-primary" data-part="btn">
        변경 내용 확인
      </button>
      <output aria-live="polite" data-part="output">
      </output>
    </form>
  </div>
</template>
