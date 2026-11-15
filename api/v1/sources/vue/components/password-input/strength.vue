<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="password-input" data-kv-variant="strength" data-klic-component="password-input" class="kn-password-input">
    <label data-part="field">
      <span>
        새 비밀번호
      </span>
      <input type="password" value="" data-kv-strength autocomplete="new-password" data-part="input">
    </label>
    <ul data-part="list">
      <li data-kv-rule="length">
        ○ 8자 이상
      </li>
      <li data-kv-rule="digit">
        ○ 숫자 포함
      </li>
    </ul>
    <output aria-live="polite" data-part="output">
      조건을 확인하세요.
    </output>
  </div>
</template>
