<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="hover-card" class="kn-hover-card">
    <details data-part="hovercard">
      <summary>
        <span role="img" aria-label="김하늘 · 생성한 가상 인물 프로필" title="김하늘" style="background-image:url('./block-runtime/portraits/team-atlas-d.png');background-size:600% 600%;background-position:60% 40%" data-part="person-avatar root-person has-photo">
          하늘
        </span>
        김하늘 · 프로필 보기
      </summary>
      <div>
        <strong>
          김하늘
        </strong>
        <p>
          Product Designer
        </p>
        <small>
          KLIC Interface 팀 · 가상 인물
        </small>
      </div>
    </details>
  </div>
</template>
