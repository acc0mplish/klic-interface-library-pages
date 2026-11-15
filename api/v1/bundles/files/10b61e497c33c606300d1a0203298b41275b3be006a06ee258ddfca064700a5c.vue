<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="color-picker" class="kn-color-picker">
    <fieldset data-part="options">
      <legend>
        강조 블루
      </legend>
      <label>
        <input type="radio" name="export-color-picker-default-choice" value="#245fc2"  data-choice data-part="radio">
        <span style="--swatch:#245fc2">
          #245fc2
        </span>
      </label>
      <label>
        <input type="radio" name="export-color-picker-default-choice" value="#2641b9" checked data-choice data-part="radio">
        <span style="--swatch:#2641b9">
          #2641b9
        </span>
      </label>
      <label>
        <input type="radio" name="export-color-picker-default-choice" value="#1e4c8a"  data-choice data-part="radio">
        <span style="--swatch:#1e4c8a">
          #1e4c8a
        </span>
      </label>
    </fieldset>
    <p data-choice-result data-part="hint">
      선택: #2641b9
    </p>
  </div>
</template>
