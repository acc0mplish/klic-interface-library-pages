<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="input" data-kv-variant="contact" data-klic-component="input" class="kn-input">
    <form data-kv-form>
      <label data-part="field">
        <span>
          업무 이메일
        </span>
        <input id="klic-kv-export-input-input-contact-input" type="email" value="" placeholder="name@company.com" required aria-describedby="klic-kv-export-input-input-contact-help" aria-errormessage="klic-kv-export-input-input-contact-error" data-part="input">
      </label>
      <p id="klic-kv-export-input-input-contact-help" data-part="muted">
        초대 링크를 받을 주소를 입력하세요.
      </p>
      <p id="klic-kv-export-input-input-contact-error" hidden data-part="error">
        업무용 이메일 주소를 확인하세요.
      </p>
      <button type="submit" class="kv-primary" data-part="btn">
        초대 링크 준비
      </button>
      <output aria-live="polite" data-part="output">
      </output>
    </form>
  </div>
</template>
