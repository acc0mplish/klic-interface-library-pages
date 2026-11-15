<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="radio-group" data-kv-variant="plan-cards" data-klic-component="radio-group" class="kn-radio-group">
    <header data-part="heading">
      <strong>
        요금제 비교
      </strong>
    </header>
    <fieldset data-part="choices">
      <legend>
        한 가지 선택
      </legend>
      <label>
        <input type="radio" name="kv-export-radio-group-radio-group-plan-cards" value="Starter" checked data-part="radio">
        <span>
          <strong>
            Starter
          </strong>
          <small>
            개인 작업 · 무료
          </small>
        </span>
      </label>
      <label>
        <input type="radio" name="kv-export-radio-group-radio-group-plan-cards" value="Team"  data-part="radio">
        <span>
          <strong>
            Team
          </strong>
          <small>
            함께 작업 · 월 ₩12,000
          </small>
        </span>
      </label>
      <label>
        <input type="radio" name="kv-export-radio-group-radio-group-plan-cards" value="Business"  data-part="radio">
        <span>
          <strong>
            Business
          </strong>
          <small>
            조직 관리 · 별도 문의
          </small>
        </span>
      </label>
    </fieldset>
    <output data-kv-selection aria-live="polite" data-part="output">
      Starter 선택됨
    </output>
  </div>
</template>
