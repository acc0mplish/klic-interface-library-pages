<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="textarea" data-kv-variant="feedback" data-klic-component="textarea" class="kn-textarea">
    <form data-kv-form>
      <label data-part="field">
        <span>
          피드백 유형
        </span>
        <select data-part="select">
          <option>
            기능 제안
          </option>
          <option>
            사용성 개선
          </option>
          <option>
            오류 제보
          </option>
        </select>
      </label>
      <label data-part="field">
        <span>
          상세 내용
        </span>
        <textarea required rows="3" placeholder="어떤 상황에서 필요했나요?" data-part="textarea">
        </textarea>
      </label>
      <button type="submit" class="kv-primary" data-part="btn">
        피드백 준비
      </button>
      <output aria-live="polite" data-part="output">
      </output>
    </form>
  </div>
</template>
