<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="number-input" data-kv-variant="dimension" data-klic-component="number-input" class="kn-number-input">
    <form data-kv-form>
      <div class="ku-grid-2" data-part="grid-2">
        <label data-part="field">
          <span>
            너비 (px)
          </span>
          <input type="number" value="1280" min="320" max="3840" data-part="input">
        </label>
        <label data-part="field">
          <span>
            높이 (px)
          </span>
          <input type="number" value="720" min="240" max="2160" data-part="input">
        </label>
      </div>
      <button type="submit" class="kv-primary" data-part="btn">
        크기 적용
      </button>
      <output aria-live="polite" data-part="output">
      </output>
    </form>
  </div>
</template>
