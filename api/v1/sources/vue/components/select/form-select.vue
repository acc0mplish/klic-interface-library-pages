<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="select" data-kv-variant="form-select" data-klic-component="select" class="kn-select">
    <form data-kv-form>
      <label data-part="field">
        <span>
          문의 주제
        </span>
        <select required data-part="select">
          <option value="">
            주제를 선택하세요
          </option>
          <option>
            도입 상담
          </option>
          <option>
            기술 문의
          </option>
          <option>
            결제 문의
          </option>
        </select>
      </label>
      <button type="submit" class="kv-primary" data-part="btn">
        문의 준비
      </button>
      <output aria-live="polite" data-part="output">
      </output>
    </form>
  </div>
</template>
