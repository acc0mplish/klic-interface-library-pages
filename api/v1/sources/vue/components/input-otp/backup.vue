<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="input-otp" data-kv-variant="backup" data-klic-component="input-otp" class="kn-input-otp">
    <form data-kv-form>
      <header data-part="heading">
        <strong>
          보안 PIN 확인
        </strong>
        <p data-part="muted">
          중요한 설정을 변경하기 전 4자리 PIN을 확인합니다.
        </p>
      </header>
      <label data-part="field">
        <span>
          4자리 PIN
        </span>
        <input type="password" value="" required inputmode="numeric" pattern="[0-9]{4}" maxlength="4" data-part="input">
      </label>
      <button type="submit" class="kv-primary" data-part="btn">
        PIN 확인
      </button>
      <output aria-live="polite" data-part="output">
      </output>
    </form>
  </div>
</template>
