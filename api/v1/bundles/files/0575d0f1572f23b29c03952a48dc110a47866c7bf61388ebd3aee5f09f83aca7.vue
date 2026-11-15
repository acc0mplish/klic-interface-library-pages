<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="form" data-kv-variant="profile" data-klic-component="form" class="kn-form">
    <form data-kv-form>
      <header data-part="heading">
        <strong>
          프로필 편집
        </strong>
      </header>
      <label data-part="field">
        <span>
          이름
        </span>
        <input type="text" value="김하늘" required data-part="input">
      </label>
      <label data-part="field">
        <span>
          직무
        </span>
        <input type="text" value="프로덕트 디자이너"  data-part="input">
      </label>
      <button type="submit" class="kv-primary" data-part="btn">
        프로필 저장
      </button>
      <output aria-live="polite" data-part="output">
      </output>
    </form>
  </div>
</template>
