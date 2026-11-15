<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="file-upload" data-kv-variant="drop-target" data-klic-component="file-upload" class="kn-file-upload">
    <div data-kv-drop data-part="dropzone">
      <component :is="KlicIcons.UploadCloud" data-part="icon" aria-hidden="true" />
      <strong>
        여기에 파일을 놓으세요
      </strong>
      <p data-part="muted">
        또는 아래에서 파일을 선택하세요.
      </p>
      <input aria-label="업로드할 파일 선택" type="file" multiple data-kv-files data-part="input">
    </div>
    <ul data-kv-file-list aria-live="polite" data-part="list">
      <li>
        모든 파일은 이 페이지에서만 확인됩니다.
      </li>
    </ul>
  </div>
</template>
