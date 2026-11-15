<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="date-picker" data-kv-variant="bounds" data-klic-component="date-picker" class="kn-date-picker">
    <form data-kv-form data-kv-date-range>
      <div class="ku-grid-2" data-part="grid-2">
        <label data-part="field">
          <span>
            시작
          </span>
          <input type="date" value="2026-10-26" required data-kv-start data-part="input">
        </label>
        <label data-part="field">
          <span>
            종료
          </span>
          <input type="date" value="2026-10-30" required data-kv-end data-part="input">
        </label>
      </div>
      <button type="submit" class="kv-primary" data-part="btn">
        구간 확인
      </button>
      <output aria-live="polite" data-part="output">
      </output>
    </form>
  </div>
</template>
