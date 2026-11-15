<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="code-block" data-kv-variant="terminal" data-klic-component="code-block" class="kn-code-block">
    <header data-part="heading">
      <strong>
        로컬 미리 보기
      </strong>
    </header>
    <pre data-part="code">
      <code>
        <span data-part="muted">
          $
        </span>
        bun run dev
  
  Local: http://localhost:5173
  Ready in 240 ms
      </code>
    </pre>
    <button type="button" data-klic-surface="control" data-kv-action="copy-text" data-kv-value="bun run dev" data-part="btn">
      명령 복사
    </button>
  </div>
</template>
