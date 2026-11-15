<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="date-range-picker" data-kv-variant="report-range" data-klic-component="date-range-picker" class="kn-date-range-picker">
    <form data-kv-form data-kv-date-range>
      <header data-part="heading">
        <strong>
          보고서 집계 기간
        </strong>
      </header>
      <div class="ku-actions" data-part="actions">
        <button type="button" data-klic-surface="control" data-kv-action="date-preset" data-kv-from="2026-10-26" data-kv-to="2026-11-01" data-part="btn">
          이번 주
        </button>
        <button type="button" data-klic-surface="control" data-kv-action="date-preset" data-kv-from="2026-10-01" data-kv-to="2026-10-31" data-part="btn">
          이번 달
        </button>
      </div>
      <div class="ku-grid-2" data-part="grid-2">
        <label data-part="field">
          <span>
            시작일
          </span>
          <input type="date" value="2026-10-26" required data-kv-start data-part="input">
        </label>
        <label data-part="field">
          <span>
            종료일
          </span>
          <input type="date" value="2026-10-30" required data-kv-end data-part="input">
        </label>
      </div>
      <button type="submit" class="kv-primary" data-part="btn">
        기간 적용
      </button>
      <output aria-live="polite" data-part="output">
      </output>
    </form>
  </div>
</template>
