<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="progress" class="kn-progress">
    <div data-part="progress-title">
      <label for="export-progress-default-progress">
        파일 업로드
      </label>
      <span data-progress-label>
        64%
      </span>
    </div>
    <progress id="export-progress-default-progress" max="100" value="64">
      64%
    </progress>
    <div data-part="progress-meta">
      <span>
        디자인 에셋.zip
      </span>
      <button data-action="progress" data-part="btn">
        진행
        <component :is="KlicIcons.ArrowRight" data-part="icon" />
      </button>
    </div>
  </div>
</template>
