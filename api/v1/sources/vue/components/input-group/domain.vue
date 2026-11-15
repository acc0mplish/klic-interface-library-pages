<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="input-group" data-kv-variant="domain" data-klic-component="input-group" class="kn-input-group">
    <form data-kv-form>
      <label data-part="field">
        <span>
          공유 도메인
        </span>
        <span data-klic-surface="field" data-part="input-group">
          <span>
            https://
          </span>
          <input aria-label="공유 도메인" placeholder="team.klic.app" required data-part="input">
        </span>
      </label>
      <button type="submit" class="kv-primary" data-part="btn">
        저장
      </button>
      <output aria-live="polite" data-part="output">
      </output>
    </form>
  </div>
</template>
