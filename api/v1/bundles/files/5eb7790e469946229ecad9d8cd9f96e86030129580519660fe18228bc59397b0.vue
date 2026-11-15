<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="checkbox" data-kv-variant="checklist" data-klic-component="checkbox" class="kn-checkbox">
    <header data-part="heading">
      <strong>
        검토 체크리스트
      </strong>
    </header>
    <fieldset data-part="choices">
      <legend>
        필요한 항목 선택
      </legend>
      <label>
        <input type="checkbox" name="kv-export-checkbox-checkbox-checklist" value="레이블 연결 확인" checked data-part="checkbox">
        <span>
          <strong>
            레이블 연결 확인
          </strong>
        </span>
      </label>
      <label>
        <input type="checkbox" name="kv-export-checkbox-checkbox-checklist" value="키보드 탐색 확인"  data-part="checkbox">
        <span>
          <strong>
            키보드 탐색 확인
          </strong>
        </span>
      </label>
      <label>
        <input type="checkbox" name="kv-export-checkbox-checkbox-checklist" value="모바일 레이아웃 확인"  data-part="checkbox">
        <span>
          <strong>
            모바일 레이아웃 확인
          </strong>
        </span>
      </label>
    </fieldset>
    <output data-kv-selection aria-live="polite" data-part="output">
      레이블 연결 확인 선택됨
    </output>
  </div>
</template>
