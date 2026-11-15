<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="field" data-kv-variant="horizontal" data-klic-component="field" class="kn-field">
    <form data-kv-form>
      <div data-part="horizontal-field">
        <header data-part="heading">
          <strong>
            표시 이름
          </strong>
          <p data-part="muted">
            팀에서 보이는 이름입니다.
          </p>
        </header>
        <label data-part="field">
          <span>
            표시 이름
          </span>
          <input type="text" value="김하늘" required data-part="input">
        </label>
      </div>
      <button type="submit" class="kv-primary" data-part="btn">
        저장
      </button>
      <output aria-live="polite" data-part="output">
      </output>
    </form>
  </div>
</template>
