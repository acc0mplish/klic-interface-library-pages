<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="date-picker" data-kv-variant="meeting" data-klic-component="date-picker" class="kn-date-picker">
    <form data-kv-form>
      <header data-part="heading">
        <strong>
          팀 미팅
        </strong>
      </header>
      <label data-part="field">
        <span>
          미팅 날짜
        </span>
        <input type="date" value="2026-10-28" required data-part="input">
      </label>
      <label data-part="field">
        <span>
          담당자
        </span>
        <select data-part="select">
          <option>
            김하늘
          </option>
          <option>
            이도윤
          </option>
          <option>
            박서연
          </option>
        </select>
      </label>
      <button type="submit" class="kv-primary" data-part="btn">
        일정 적용
      </button>
      <output aria-live="polite" data-part="output">
      </output>
    </form>
  </div>
</template>
