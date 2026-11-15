<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="combobox" class="kn-combobox">
    <label for="export-combobox-default-combo" data-part="label">
      프로젝트 선택
    </label>
    <input id="export-combobox-default-combo" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="export-combobox-default-options" autocomplete="off" data-combo placeholder="프로젝트 검색" data-part="input">
    <div id="export-combobox-default-options" role="listbox" aria-label="프로젝트 후보" hidden data-part="combo-options">
      <button type="button" role="option" aria-selected="false" id="export-combobox-default-option-0" data-cmp-action="combo-option" data-part="btn">
        디자인 시스템
      </button>
      <button type="button" role="option" aria-selected="false" id="export-combobox-default-option-1" data-cmp-action="combo-option" data-part="btn">
        브랜드 리뉴얼
      </button>
      <button type="button" role="option" aria-selected="false" id="export-combobox-default-option-2" data-cmp-action="combo-option" data-part="btn">
        모바일 앱
      </button>
    </div>
    <p data-cmp-status role="status" aria-live="polite" data-part="status">
    </p>
  </div>
</template>
