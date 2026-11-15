<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="avatar" data-kv-variant="editable" data-klic-component="avatar" class="kn-avatar">
    <div class="ku-row" data-part="row">
      <span>
        <span aria-label="김" data-part="avatar">
          김
        </span>
      </span>
      <span>
        <p data-part="muted">
          프로필의 이름 첫 글자를 표시합니다.
        </p>
      </span>
    </div>
    <form data-kv-form>
      <label data-part="field">
        <span>
          표시 이름
        </span>
        <input type="text" value="김하늘" required data-part="input">
      </label>
      <button type="submit" class="kv-primary" data-part="btn">
        프로필 적용
      </button>
      <output aria-live="polite" data-part="output">
      </output>
    </form>
  </div>
</template>
