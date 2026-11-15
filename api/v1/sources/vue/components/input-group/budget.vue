<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="input-group" data-kv-variant="budget" data-klic-component="input-group" class="kn-input-group">
    <form data-kv-form>
      <label data-part="field">
        <span>
          월간 예산
        </span>
        <span data-klic-surface="field" data-part="input-group">
          <span>
            ₩
          </span>
          <input type="number" min="0" step="1000" value="50000" aria-label="예산 금액" data-part="input">
          <span>
            / 월
          </span>
        </span>
      </label>
      <button type="submit" class="kv-primary" data-part="btn">
        예산 적용
      </button>
      <output aria-live="polite" data-part="output">
      </output>
    </form>
  </div>
</template>
