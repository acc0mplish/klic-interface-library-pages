<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="dropzone" class="kn-dropzone">
    <div data-dropzone data-part="dropzone">
      <component :is="KlicIcons.Upload" data-part="icon" aria-hidden="true" />
      <label for="export-dropzone-default-file">
        파일을 놓거나 선택하세요
      </label>
      <input type="file" id="export-dropzone-default-file" multiple data-files data-part="input">
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
