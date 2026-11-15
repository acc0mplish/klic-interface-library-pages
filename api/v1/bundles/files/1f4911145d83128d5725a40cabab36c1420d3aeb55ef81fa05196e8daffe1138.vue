<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="slider" data-kv-variant="volume" data-klic-component="slider" class="kn-slider">
    <header data-part="heading">
      <strong>
        미리 듣기 음량
      </strong>
    </header>
    <div data-klic-surface="field" data-part="input-group">
      <button type="button" data-klic-surface="control" data-kv-action="mute"  data-part="btn">
        음소거
      </button>
      <input aria-label="음량" type="range" min="0" max="100" value="65" data-kv-range data-part="slider">
      <output>
        65
      </output>
    </div>
  </div>
</template>
