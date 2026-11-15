<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="textarea" class="kn-textarea">
    <label for="export-textarea-default-text" data-part="label">
      프로젝트 설명
    </label>
    <textarea id="export-textarea-default-text" rows="4" maxlength="240" data-count-text placeholder="팀과 공유할 내용을 작성하세요." data-part="textarea">
    </textarea>
    <p data-part="hint">
      <output data-count-output>
        0
      </output>
      / 240자
    </p>
  </div>
</template>
