<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="tooltip" data-kv-variant="verified" data-klic-component="tooltip" class="kn-tooltip">
    <header data-part="heading">
      <strong>
        team.klic.example
      </strong>
    </header>
    <span data-part="tooltip-wrap">
      <button type="button" data-klic-surface="control" aria-describedby="kv-export-tooltip-tooltip-verified-tip" data-kv-tip-trigger data-part="btn">
        <component :is="KlicIcons.BadgeCheck" data-part="icon" aria-hidden="true" />
        도메인 확인됨
      </button>
      <span popover="manual" role="tooltip" id="kv-export-tooltip-tooltip-verified-tip" data-part="tooltip" data-state="closed">
        이 워크스페이스 관리자가 소유권을 확인한 도메인입니다.
      </span>
    </span>
  </div>
</template>
