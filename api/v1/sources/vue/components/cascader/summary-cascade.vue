<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="cascader" data-kv-variant="summary-cascade" data-klic-component="cascader" class="kn-cascader">
    <section data-klic-surface="card" data-part="panel">
      <header data-part="heading">
        <strong>
          자료를 저장할 위치
        </strong>
      </header>
      <component :is="KlicIcons.FolderTree" data-part="icon" aria-hidden="true" />
      <p data-part="muted">
        제품이나 운영 분류에서 세부 폴더를 선택하세요.
      </p>
    </section>
    <div data-kv-cascade data-part="cascade cascade-summary">
      <label data-part="field">
        <span>
          상위 분류
        </span>
        <select data-kv-cascade-level="0" data-part="select">
          <option>
            제품
          </option>
          <option>
            운영
          </option>
        </select>
      </label>
      <label data-part="field">
        <span>
          하위 분류
        </span>
        <select data-kv-cascade-level="1" data-part="select">
          <option>
            디자인
          </option>
          <option>
            개발
          </option>
        </select>
      </label>
      <label data-part="field">
        <span>
          세부 분류
        </span>
        <select data-kv-cascade-level="2" data-part="select">
          <option>
            인터페이스
          </option>
          <option>
            브랜드
          </option>
        </select>
      </label>
      <output data-kv-cascade-output aria-live="polite" data-part="output">
        제품 / 디자인 / 인터페이스
      </output>
    </div>
  </div>
</template>
