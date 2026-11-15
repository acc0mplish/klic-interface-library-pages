<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="switch" data-kv-variant="form-setting" data-klic-component="switch" class="kn-switch">
    <form data-kv-form>
      <label data-part="switch-row">
        <span>
          <strong>
            자동 정리
          </strong>
          <small>
            완료한 작업을 주기적으로 보관합니다.
          </small>
        </span>
        <input type="checkbox" role="switch" aria-label="자동 정리" data-part="checkbox">
      </label>
      <label data-part="field">
        <span>
          정리 주기
        </span>
        <select data-part="select">
          <option>
            매주
          </option>
          <option>
            매월
          </option>
        </select>
      </label>
      <button type="submit" class="kv-primary" data-part="btn">
        설정 저장
      </button>
      <output aria-live="polite" data-part="output">
      </output>
    </form>
  </div>
</template>
