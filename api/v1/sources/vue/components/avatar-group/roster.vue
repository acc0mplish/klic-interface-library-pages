<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="avatar-group" data-kv-variant="roster" data-klic-component="avatar-group" class="kn-avatar-group">
    <header data-part="heading">
      <strong>
        팀 명단
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
          관리자
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
          개발
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
          리서치
        </span>
      </span>
    </div>
  </div>
</template>
