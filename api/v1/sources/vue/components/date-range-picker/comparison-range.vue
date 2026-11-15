<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="date-range-picker" data-kv-variant="comparison-range" data-klic-component="date-range-picker" class="kn-date-range-picker">
    <details open data-part="details">
      <summary>
        기준 기간
      </summary>
      <div>
        <form data-kv-form data-kv-date-range>
          <div class="ku-grid-2" data-part="grid-2">
            <label data-part="field">
              <span>
                시작일
              </span>
              <input type="date" value="2026-10-01" required data-kv-start data-part="input">
            </label>
            <label data-part="field">
              <span>
                종료일
              </span>
              <input type="date" value="2026-10-31" required data-kv-end data-part="input">
            </label>
          </div>
          <button type="submit" class="kv-primary" data-part="btn">
            기준 적용
          </button>
          <output aria-live="polite" data-part="output">
          </output>
        </form>
      </div>
    </details>
    <details open data-part="details">
      <summary>
        비교 기간
      </summary>
      <div>
        <form data-kv-form data-kv-date-range>
          <div class="ku-grid-2" data-part="grid-2">
            <label data-part="field">
              <span>
                시작일
              </span>
              <input type="date" value="2026-09-01" required data-kv-start data-part="input">
            </label>
            <label data-part="field">
              <span>
                종료일
              </span>
              <input type="date" value="2026-09-30" required data-kv-end data-part="input">
            </label>
          </div>
          <button type="submit" class="kv-primary" data-part="btn">
            비교 적용
          </button>
          <output aria-live="polite" data-part="output">
          </output>
        </form>
      </div>
    </details>
  </div>
</template>
