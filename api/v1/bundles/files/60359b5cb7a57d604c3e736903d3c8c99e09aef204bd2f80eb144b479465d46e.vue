<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="resizable" data-kv-variant="editor" data-klic-component="resizable" class="kn-resizable">
    <label data-part="field">
      <span>
        탐색 패널 너비 (%)
      </span>
      <input type="range" value="35" min="25" max="65" data-kv-split data-part="slider">
    </label>
    <div style="--kv-split:35%" data-part="split">
      <aside>
        <header data-part="heading">
          <strong>
            파일
          </strong>
        </header>
        <ul data-part="list">
          <li>
            index.html
          </li>
          <li>
            styles.css
          </li>
          <li>
            app.js
          </li>
        </ul>
      </aside>
      <section>
        <header data-part="heading">
          <strong>
            편집기
          </strong>
        </header>
        <p data-part="muted">
          선택한 파일의 내용을 이 영역에서 확인합니다.
        </p>
      </section>
    </div>
  </div>
</template>
