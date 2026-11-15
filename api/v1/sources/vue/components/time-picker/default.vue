<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="time-picker" class="kn-time-picker">
    <div data-part="field">
      <label for="export-time-picker-default-time" data-part="label">
        회의 시작
      </label>
      <input id="export-time-picker-default-time" type="time" step="900" value="09:30" data-part="input">
    </div>
    <p data-part="hint">
      15분 단위 · 현지 시간
    </p>
  </div>
</template>
