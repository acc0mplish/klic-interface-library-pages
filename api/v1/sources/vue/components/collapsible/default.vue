<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="collapsible" class="kn-collapsible">
    <details data-part="collapsible">
      <summary>
        <component :is="KlicIcons.ChevronRight" data-part="icon" aria-hidden="true" />
        프로젝트 부가 정보
      </summary>
      <div>
        <p>
          시작일: 2026.10.24
        </p>
        <p>
          담당 팀: KLIC Interface
        </p>
        <p>
          토큰 프로필: Brand A
        </p>
      </div>
    </details>
  </div>
</template>
