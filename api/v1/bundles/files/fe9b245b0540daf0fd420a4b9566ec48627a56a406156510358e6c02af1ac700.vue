<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="tooltip" data-kv-variant="role" data-klic-component="tooltip" class="kn-tooltip">
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
    <span data-part="tooltip-wrap">
      <button type="button" data-klic-surface="control" aria-describedby="kv-export-tooltip-tooltip-role-tip" data-kv-tip-trigger data-part="btn">
        <component :is="KlicIcons.Shield" data-part="icon" aria-hidden="true" />
        관리자 권한
      </button>
      <span popover="manual" role="tooltip" id="kv-export-tooltip-tooltip-role-tip" data-part="tooltip" data-state="closed">
        멤버 초대, 프로젝트 관리, 워크스페이스 설정을 변경할 수 있습니다.
      </span>
    </span>
  </div>
</template>
