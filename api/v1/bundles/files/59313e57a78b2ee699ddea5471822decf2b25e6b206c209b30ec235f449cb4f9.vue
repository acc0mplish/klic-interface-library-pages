<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="button-group" data-kv-variant="split-publish" data-klic-component="button-group" class="kn-button-group">
    <header data-part="heading">
      <strong>
        변경 사항 3건
      </strong>
      <p data-part="muted">
        모든 변경은 로컬 미리 보기입니다.
      </p>
    </header>
    <div class="ku-actions ku-joined" data-part="actions joined">
      <button type="button" data-klic-surface="control" data-kv-action="notice"  data-part="btn">
        변경 게시
      </button>
      <details  data-part="details">
        <summary>
          게시 옵션
        </summary>
        <div>
          <div data-part="menu">
            <button type="button" data-klic-surface="control" data-kv-action="notice"  data-part="btn">
              내일 게시
            </button>
            <button type="button" data-klic-surface="control" data-kv-action="notice"  data-part="btn">
              초안 보관
            </button>
          </div>
        </div>
      </details>
    </div>
  </div>
</template>
