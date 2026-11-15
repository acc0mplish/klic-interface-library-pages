<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="file-upload" data-kv-variant="image" data-klic-component="file-upload" class="kn-file-upload">
    <header data-part="heading">
      <strong>
        커버 이미지
      </strong>
      <p data-part="muted">
        권장 비율 16:9 · 로컬 파일 선택
      </p>
    </header>
    <label data-part="dropzone">
      <component :is="KlicIcons.Image" data-part="icon" aria-hidden="true" />
      <span>
        이미지 찾기
      </span>
      <input type="file" accept="image/*" data-kv-files data-part="input">
    </label>
    <ul data-kv-file-list aria-live="polite" data-part="list">
      <li>
        JPG, PNG, WebP 파일을 선택하세요.
      </li>
    </ul>
  </div>
</template>
