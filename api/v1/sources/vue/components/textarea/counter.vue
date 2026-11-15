<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="textarea" data-kv-variant="counter" data-klic-component="textarea" class="kn-textarea">
    <label data-part="field">
      <span>
        프로젝트 소개
      </span>
      <textarea data-kv-count maxlength="160" rows="4" placeholder="프로젝트를 한 문장으로 소개하세요." data-part="textarea">
      </textarea>
    </label>
    <output aria-live="polite" data-part="output">
      0 / 160자
    </output>
  </div>
</template>
