<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="textarea" data-kv-variant="comment" data-klic-component="textarea" class="kn-textarea">
    <div class="ku-row" data-part="row">
      <span>
        <span aria-label="나" data-part="avatar">
          나
        </span>
        <strong>
          김하늘
        </strong>
      </span>
      <span>
        <span data-part="badge">
          팀 멤버
        </span>
      </span>
    </div>
    <form data-kv-form>
      <label data-part="field">
        <span>
          댓글
        </span>
        <textarea required rows="3" placeholder="의견을 남겨보세요." data-part="textarea">
        </textarea>
      </label>
      <button type="submit" class="kv-primary" data-part="btn">
        댓글 등록
      </button>
      <output aria-live="polite" data-part="output">
      </output>
    </form>
  </div>
</template>
