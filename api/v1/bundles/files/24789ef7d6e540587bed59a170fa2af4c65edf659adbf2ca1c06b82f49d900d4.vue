<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="calendar" data-kv-variant="booking" data-klic-component="calendar" class="kn-calendar">
    <form data-kv-form>
      <header data-part="heading">
        <strong>
          방문 예약
        </strong>
      </header>
      <label data-part="field">
        <span>
          예약일
        </span>
        <input type="date" value="2026-10-28" min="2026-10-26" required data-part="input">
      </label>
      <fieldset data-part="choices">
        <legend>
          한 가지 선택
        </legend>
        <label>
          <input type="radio" name="kv-export-calendar-calendar-booking" value="10:00" checked data-part="radio">
          <span>
            <strong>
              10:00
            </strong>
          </span>
        </label>
        <label>
          <input type="radio" name="kv-export-calendar-calendar-booking" value="14:00"  data-part="radio">
          <span>
            <strong>
              14:00
            </strong>
          </span>
        </label>
        <label>
          <input type="radio" name="kv-export-calendar-calendar-booking" value="16:00"  data-part="radio">
          <span>
            <strong>
              16:00
            </strong>
          </span>
        </label>
      </fieldset>
      <button type="submit" class="kv-primary" data-part="btn">
        예약 내용 확인
      </button>
      <output aria-live="polite" data-part="output">
      </output>
    </form>
  </div>
</template>
