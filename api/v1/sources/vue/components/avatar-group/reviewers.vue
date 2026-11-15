<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="avatar-group" data-kv-variant="reviewers" data-klic-component="avatar-group" class="kn-avatar-group">
    <header data-part="heading">
      <strong>
        검토 진행 · 2/3
      </strong>
    </header>
    <div class="ku-row" data-part="row">
      <span>
        <span aria-label="김" data-part="avatar">
          김
        </span>
        김하늘
      </span>
      <span>
        <span data-part="badge">
          ✓ 검토 완료
        </span>
      </span>
    </div>
    <div class="ku-row" data-part="row">
      <span>
        <span aria-label="이" data-part="avatar">
          이
        </span>
        이도윤
      </span>
      <span>
        <span data-part="badge">
          ✓ 검토 완료
        </span>
      </span>
    </div>
    <div class="ku-row" data-part="row">
      <span>
        <span aria-label="박" data-part="avatar">
          박
        </span>
        박서연
      </span>
      <span>
        <span data-part="badge">
          검토 대기
        </span>
      </span>
    </div>
    <label data-part="progress-label">
      검토 완료
      <span>
        67%
      </span>
      <progress max="100" value="67">
        67%
      </progress>
    </label>
  </div>
</template>
