<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="date-picker" data-kv-variant="availability" data-klic-component="date-picker" class="kn-date-picker">
    <form data-kv-form>
      <header data-part="heading">
        <strong>
          상담 예약
        </strong>
      </header>
      <label data-part="field">
        <span>
          가능한 일정
        </span>
        <input type="date" value="2026-10-29" required data-part="input">
      </label>
      <fieldset data-part="choices">
        <legend>
          한 가지 선택
        </legend>
        <label>
          <input type="radio" name="kv-export-date-picker-date-picker-availability" value="온라인 미팅" checked data-part="radio">
          <span>
            <strong>
              온라인 미팅
            </strong>
          </span>
        </label>
        <label>
          <input type="radio" name="kv-export-date-picker-date-picker-availability" value="전화 상담"  data-part="radio">
          <span>
            <strong>
              전화 상담
            </strong>
          </span>
        </label>
      </fieldset>
      <button type="submit" class="kv-primary" data-part="btn">
        가능 일정 준비
      </button>
      <output aria-live="polite" data-part="output">
      </output>
    </form>
  </div>
</template>
