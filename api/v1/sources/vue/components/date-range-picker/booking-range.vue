<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="date-range-picker" data-kv-variant="booking-range" data-klic-component="date-range-picker" class="kn-date-range-picker">
    <form data-kv-form data-kv-date-range>
      <header data-part="heading">
        <strong>
          공간 예약
        </strong>
        <p data-part="muted">
          시작일과 종료일을 모두 선택하세요.
        </p>
      </header>
      <div class="ku-grid-2" data-part="grid-2">
        <label data-part="field">
          <span>
            시작일
          </span>
          <input type="date" value="2026-11-02" required data-kv-start data-part="input">
        </label>
        <label data-part="field">
          <span>
            종료일
          </span>
          <input type="date" value="2026-11-05" required data-kv-end data-part="input">
        </label>
      </div>
      <label data-part="field">
        <span>
          사용 공간
        </span>
        <select data-part="select">
          <option>
            회의실 A · 6인
          </option>
          <option>
            회의실 B · 12인
          </option>
        </select>
      </label>
      <button type="submit" class="kv-primary" data-part="btn">
        예약 내용 확인
      </button>
      <output aria-live="polite" data-part="output">
      </output>
    </form>
  </div>
</template>
