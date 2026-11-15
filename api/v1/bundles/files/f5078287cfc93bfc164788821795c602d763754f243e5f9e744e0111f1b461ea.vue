<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="collapsible" data-kv-variant="code" data-klic-component="collapsible" class="kn-collapsible">
    <header data-part="heading">
      <strong>
        버튼 사용법
      </strong>
      <p data-part="muted">
        기본 HTML 버튼으로 시작합니다.
      </p>
    </header>
    <details  data-part="details">
      <summary>
        HTML 예제 보기
      </summary>
      <div>
        <pre data-part="code">
          <code>
            &lt;button type="button"&gt;저장&lt;/button&gt;
          </code>
        </pre>
      </div>
    </details>
  </div>
</template>
