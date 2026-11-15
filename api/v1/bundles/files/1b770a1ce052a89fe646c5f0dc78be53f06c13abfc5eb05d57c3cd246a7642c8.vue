<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="form" data-kv-variant="preferences" data-klic-component="form" class="kn-form">
    <form data-kv-form>
      <label data-part="field">
        <span>
          언어
        </span>
        <select data-part="select">
          <option>
            한국어
          </option>
          <option>
            English
          </option>
          <option>
            日本語
          </option>
        </select>
      </label>
      <fieldset data-part="choices">
        <legend>
          필요한 항목 선택
        </legend>
        <label>
          <input type="checkbox" name="kv-export-form-form-preferences" value="주간 요약 받기" checked data-part="checkbox">
          <span>
            <strong>
              주간 요약 받기
            </strong>
          </span>
        </label>
        <label>
          <input type="checkbox" name="kv-export-form-form-preferences" value="작업 알림 받기"  data-part="checkbox">
          <span>
            <strong>
              작업 알림 받기
            </strong>
          </span>
        </label>
      </fieldset>
      <button type="submit" class="kv-primary" data-part="btn">
        설정 적용
      </button>
      <output aria-live="polite" data-part="output">
      </output>
    </form>
  </div>
</template>
