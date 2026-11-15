<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="input-otp" data-kv-variant="email-code" data-klic-component="input-otp" class="kn-input-otp">
    <form data-kv-form>
      <header data-part="heading">
        <strong>
          이메일을 확인하세요
        </strong>
        <p data-part="muted">
          haneul@example.com으로 보낸 6자리 코드
        </p>
      </header>
      <label data-part="field">
        <span>
          6자리 인증번호
        </span>
        <input type="text" value="" required inputmode="numeric" pattern="[0-9]{6}" maxlength="6" autocomplete="one-time-code" data-part="otp input">
      </label>
      <button type="submit" class="kv-primary" data-part="btn">
        코드 확인
      </button>
      <output aria-live="polite" data-part="output">
      </output>
    </form>
  </div>
</template>
