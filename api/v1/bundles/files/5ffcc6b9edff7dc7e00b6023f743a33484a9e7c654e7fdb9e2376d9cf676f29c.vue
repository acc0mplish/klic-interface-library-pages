<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="search-input" data-kv-variant="advanced" data-klic-component="search-input" class="kn-search-input">
    <form data-kv-form>
      <label data-part="field">
        <span>
          검색어
        </span>
        <input type="search" value="" required placeholder="제목, 내용" data-part="input">
      </label>
      <div class="ku-grid-2" data-part="grid-2">
        <label data-part="field">
          <span>
            시작일
          </span>
          <input type="date" value="2026-10-01"  data-part="input">
        </label>
        <label data-part="field">
          <span>
            종료일
          </span>
          <input type="date" value="2026-10-31"  data-part="input">
        </label>
      </div>
      <button type="submit" class="kv-primary" data-part="btn">
        검색 조건 적용
      </button>
      <output aria-live="polite" data-part="output">
      </output>
    </form>
  </div>
</template>
