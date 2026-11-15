<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="input-otp" data-kv-variant="recovery" data-klic-component="input-otp" class="kn-input-otp">
    <form data-kv-form>
      <header data-part="heading">
        <strong>
          복구 코드 사용
        </strong>
        <p data-part="muted">
          저장해 둔 복구 코드 8자리를 입력하세요.
        </p>
      </header>
      <label data-part="field">
        <span>
          복구 코드
        </span>
        <input type="text" value="" required pattern="[A-Za-z0-9]{8}" maxlength="8" placeholder="AB12CD34" data-part="input">
      </label>
      <button type="submit" class="kv-primary" data-part="btn">
        복구 코드 확인
      </button>
      <output aria-live="polite" data-part="output">
      </output>
    </form>
  </div>
</template>
