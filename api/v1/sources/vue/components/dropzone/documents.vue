<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="dropzone" data-kv-variant="documents" data-klic-component="dropzone" class="kn-dropzone">
    <header data-part="heading">
      <strong>
        프로젝트 자료
      </strong>
      <p data-part="muted">
        선택한 파일은 서버로 업로드하지 않습니다.
      </p>
    </header>
    <label data-part="dropzone">
      <component :is="KlicIcons.FileUp" data-part="icon" aria-hidden="true" />
      <strong>
        문서 선택
      </strong>
      <input type="file" multiple data-kv-files accept=".pdf,.docx,.txt" data-part="input">
      <span>
        PDF · DOCX · TXT
      </span>
    </label>
    <ul data-kv-file-list aria-live="polite" data-part="list">
      <li>
        선택한 파일이 없습니다.
      </li>
    </ul>
  </div>
</template>
