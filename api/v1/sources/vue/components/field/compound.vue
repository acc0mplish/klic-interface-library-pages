<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="field" data-kv-variant="compound" data-klic-component="field" class="kn-field">
    <form data-kv-form>
      <fieldset>
        <legend>
          담당자 연락처
        </legend>
        <div class="ku-grid-2" data-part="grid-2">
          <label data-part="field">
            <span>
              이름
            </span>
            <input type="text" value="김하늘" required data-part="input">
          </label>
          <label data-part="field">
            <span>
              이메일
            </span>
            <input type="email" value="haneul@example.com" required data-part="input">
          </label>
        </div>
      </fieldset>
      <button type="submit" class="kv-primary" data-part="btn">
        저장
      </button>
      <output aria-live="polite" data-part="output">
      </output>
    </form>
  </div>
</template>
