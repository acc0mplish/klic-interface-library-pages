<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="radio-group" class="kn-radio-group">
    <fieldset data-part="options">
      <legend>
        플랜 선택
      </legend>
      <label>
        <input type="radio" name="export-radio-group-default-choice" value="Starter"  data-choice data-part="radio">
        <span >
          Starter
        </span>
      </label>
      <label>
        <input type="radio" name="export-radio-group-default-choice" value="Team" checked data-choice data-part="radio">
        <span >
          Team
        </span>
      </label>
      <label>
        <input type="radio" name="export-radio-group-default-choice" value="Enterprise"  data-choice data-part="radio">
        <span >
          Enterprise
        </span>
      </label>
    </fieldset>
    <p data-choice-result data-part="hint">
      선택: Team
    </p>
  </div>
</template>
