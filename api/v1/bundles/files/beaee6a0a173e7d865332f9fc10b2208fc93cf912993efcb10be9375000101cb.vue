<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="input-group" data-kv-variant="composer" data-klic-component="input-group" class="kn-input-group">
    <form data-kv-form>
      <label data-part="field">
        <span>
          팀 메시지
        </span>
        <textarea required rows="3" placeholder="팀에 전달할 내용을 작성하세요." data-part="textarea">
        </textarea>
      </label>
      <div class="ku-row" data-part="row">
        <p data-part="muted">
          Enter로 줄바꿈 · 최대 500자
        </p>
        <span data-part="badge">
          팀 공개
        </span>
      </div>
      <button type="submit" class="kv-primary" data-part="btn">
        메시지 준비
      </button>
      <output aria-live="polite" data-part="output">
      </output>
    </form>
  </div>
</template>
