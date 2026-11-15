<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="icon" data-kv-variant="status-icons" data-klic-component="icon" class="kn-icon">
    <div class="ku-row" data-part="row">
      <span>
        <component :is="KlicIcons.CircleCheck" data-part="icon" aria-hidden="true" />
        검토 완료
      </span>
      <span>
        <span data-part="badge">
          8건
        </span>
      </span>
    </div>
    <div class="ku-row" data-part="row">
      <span>
        <component :is="KlicIcons.Clock3" data-part="icon" aria-hidden="true" />
        진행 중
      </span>
      <span>
        <span data-part="badge">
          3건
        </span>
      </span>
    </div>
    <div class="ku-row" data-part="row">
      <span>
        <component :is="KlicIcons.TriangleAlert" data-part="icon" aria-hidden="true" />
        확인 필요
      </span>
      <span>
        <span data-part="badge">
          1건
        </span>
      </span>
    </div>
  </div>
</template>
