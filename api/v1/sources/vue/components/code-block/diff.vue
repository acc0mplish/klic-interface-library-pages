<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="code-block" data-kv-variant="diff" data-klic-component="code-block" class="kn-code-block">
    <header data-part="heading">
      <strong>
        레이블 개선
      </strong>
      <p data-part="muted">
        − 제거 · + 추가
      </p>
    </header>
    <pre data-part="code code-diff">
      <code>
        <span>
          − &lt;button&gt;확인&lt;/button&gt;
        </span>
        <span>
          + &lt;button&gt;변경 사항 저장&lt;/button&gt;
        </span>
      </code>
    </pre>
    <button type="button" data-klic-surface="control" data-kv-action="copy-code"  data-part="btn">
      변경 코드 복사
    </button>
  </div>
</template>
