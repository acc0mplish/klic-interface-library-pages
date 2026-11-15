<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="file-upload" class="kn-file-upload">
    <div data-part="file">
      <component :is="KlicIcons.Upload" data-part="icon" aria-hidden="true" />
      <label for="export-file-upload-default-file">
        파일 선택
      </label>
      <input type="file" id="export-file-upload-default-file" multiple data-files data-part="input">
      <small>
        로컬 이름·크기만 확인 · 서버 전송 없음
      </small>
    </div>
    <ul data-file-results data-part="file-results">
      <li>
        선택한 파일이 없습니다.
      </li>
    </ul>
  </div>
</template>
