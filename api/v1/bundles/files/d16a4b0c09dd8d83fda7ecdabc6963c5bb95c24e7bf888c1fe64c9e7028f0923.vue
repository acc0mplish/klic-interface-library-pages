<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="toolbar" data-kv-variant="media-controls" data-klic-component="toolbar" class="kn-toolbar">
    <div role="img" aria-label="팀 소개 영상" data-part="art">
      <span>
        KLIC
      </span>
      <strong>
        팀 소개 영상
      </strong>
      <span data-part="art-orbit">
      </span>
    </div>
    <div role="toolbar" aria-label="미디어 제어" data-part="toolbar">
      <button type="button" data-klic-surface="control" data-kv-action="play" aria-label="재생" aria-pressed="false" data-part="btn">
        <component :is="KlicIcons.Play" data-part="icon" aria-hidden="true" />
      </button>
      <button type="button" data-klic-surface="control" data-kv-action="mute" aria-label="음소거" data-part="btn">
        <component :is="KlicIcons.VolumeX" data-part="icon" aria-hidden="true" />
      </button>
      <input type="range" min="0" max="100" value="65" aria-label="음량" data-kv-range data-part="slider">
      <output>
        65
      </output>
      <button type="button" data-klic-surface="control" data-kv-action="toggle" aria-label="반복 재생" aria-pressed="false" data-part="btn">
        <component :is="KlicIcons.Repeat" data-part="icon" aria-hidden="true" />
      </button>
    </div>
    <output aria-live="polite" data-part="output">
      미디어 동작 시뮬레이션
    </output>
  </div>
</template>
