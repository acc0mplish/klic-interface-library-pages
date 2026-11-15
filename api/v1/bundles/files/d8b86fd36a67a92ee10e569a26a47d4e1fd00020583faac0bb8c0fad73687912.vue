<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="button-group" data-kv-variant="bulk-actions" data-klic-component="button-group" class="kn-button-group">
    <fieldset data-part="choices">
      <legend>
        필요한 항목 선택
      </legend>
      <label>
        <input type="checkbox" name="kv-export-button-group-button-group-bulk-actions" value="디자인 가이드" checked data-part="checkbox">
        <span>
          <strong>
            디자인 가이드
          </strong>
        </span>
      </label>
      <label>
        <input type="checkbox" name="kv-export-button-group-button-group-bulk-actions" value="운영 매뉴얼"  data-part="checkbox">
        <span>
          <strong>
            운영 매뉴얼
          </strong>
        </span>
      </label>
    </fieldset>
    <div class="ku-actions" data-part="actions">
      <button type="button" data-klic-surface="control" data-kv-action="selection-action"  data-part="btn">
        선택 항목 보관
      </button>
      <button type="button" data-klic-surface="control" data-kv-action="uncheck"  data-part="btn">
        선택 해제
      </button>
    </div>
    <output aria-live="polite" data-part="output">
    </output>
  </div>
</template>
