<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="field" data-kv-variant="validation" data-klic-component="field" class="kn-field">
    <form data-kv-form>
      <label data-part="field">
        <span>
          프로젝트 코드
        </span>
        <input id="klic-kv-export-field-field-validation-input" type="text" value="" required pattern="[A-Z]{3}-[0-9]{3}" placeholder="KLC-001" aria-describedby="klic-kv-export-field-field-validation-help" aria-errormessage="klic-kv-export-field-field-validation-error" data-part="input">
      </label>
      <p id="klic-kv-export-field-field-validation-help" data-part="muted">
        영문 대문자 3자, 하이픈, 숫자 3자 형식입니다.
      </p>
      <p id="klic-kv-export-field-field-validation-error" hidden data-part="error">
        프로젝트 코드 형식을 확인하세요.
      </p>
      <button type="submit" class="kv-primary" data-part="btn">
        코드 확인
      </button>
      <output aria-live="polite" data-part="output">
      </output>
    </form>
  </div>
</template>
