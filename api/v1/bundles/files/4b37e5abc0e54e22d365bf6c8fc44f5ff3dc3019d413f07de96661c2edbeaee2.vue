<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="radio-group" data-kv-variant="survey" data-klic-component="radio-group" class="kn-radio-group">
    <header data-part="heading">
      <strong>
        설문 응답
      </strong>
    </header>
    <fieldset data-part="choices">
      <legend>
        한 가지 선택
      </legend>
      <label>
        <input type="radio" name="kv-export-radio-group-radio-group-survey" value="매우 만족" checked data-part="radio">
        <span>
          <strong>
            매우 만족
          </strong>
        </span>
      </label>
      <label>
        <input type="radio" name="kv-export-radio-group-radio-group-survey" value="만족"  data-part="radio">
        <span>
          <strong>
            만족
          </strong>
        </span>
      </label>
      <label>
        <input type="radio" name="kv-export-radio-group-radio-group-survey" value="보통"  data-part="radio">
        <span>
          <strong>
            보통
          </strong>
        </span>
      </label>
      <label>
        <input type="radio" name="kv-export-radio-group-radio-group-survey" value="개선 필요"  data-part="radio">
        <span>
          <strong>
            개선 필요
          </strong>
        </span>
      </label>
    </fieldset>
    <output data-kv-selection aria-live="polite" data-part="output">
      매우 만족 선택됨
    </output>
  </div>
</template>
