<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="navigation-menu" class="kn-navigation-menu">
    <nav aria-label="라이브러리 섹션" data-part="navigation">
      <a href="#components" aria-current="page" data-part="link">
        <component :is="KlicIcons.LayoutGrid" data-part="icon" aria-hidden="true" />
        <span>
          컴포넌트
        </span>
      </a>
      <a href="#blocks"  data-part="link">
        <component :is="KlicIcons.PanelsTopLeft" data-part="icon" aria-hidden="true" />
        <span>
          블록
        </span>
      </a>
      <a href="#tokens"  data-part="link">
        <component :is="KlicIcons.SwatchBook" data-part="icon" aria-hidden="true" />
        <span>
          토큰
        </span>
      </a>
    </nav>
  </div>
</template>
