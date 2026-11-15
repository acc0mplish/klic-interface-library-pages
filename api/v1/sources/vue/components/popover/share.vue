<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="popover" data-kv-variant="share" data-klic-component="popover" class="kn-popover" data-state="closed">
    <section data-klic-surface="card" data-part="panel">
      <header data-part="heading">
        <strong>
          브랜드 가이드
        </strong>
      </header>
      <span data-part="badge">
        팀 문서
      </span>
    </section>
    <div data-part="popover-wrap">
      <button type="button" data-klic-surface="control" data-kv-action="popover-open" aria-expanded="false" aria-controls="kv-export-popover-popover-share-popover"  data-part="btn">
        공유
      </button>
      <div data-klic-surface="overlay" id="kv-export-popover-popover-share-popover" role="region" aria-label="공유" data-kv-floating popover="manual" hidden data-part="floating-panel" data-state="closed">
        <header data-part="heading">
          <strong>
            팀에 공유
          </strong>
        </header>
        <label data-part="field">
          <span>
            공개 범위
          </span>
          <select data-part="select">
            <option>
              팀 멤버
            </option>
            <option>
              링크를 아는 사람
            </option>
          </select>
        </label>
        <input aria-label="공유 주소" readonly value="https://example.com/brand" data-part="input">
        <button type="button" data-klic-surface="control" data-kv-action="copy-value"  data-part="btn">
          공유 주소 복사
        </button>
        <button type="button" data-klic-surface="control" data-kv-action="popover-close"  data-part="btn">
          닫기
        </button>
      </div>
    </div>
    <output aria-live="polite" data-part="output">
    </output>
  </div>
</template>
