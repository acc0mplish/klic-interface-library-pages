<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="sidebar" class="kn-sidebar">
    <div data-part="mini-sidebar-nav">
      <div data-part="mini-workspace">
        <component :is="KlicIcons.Layers2" data-part="icon" />
        Workspace
      </div>
      <button aria-current="page" data-action="mini-nav" data-label="대시보드" data-part="mini-nav-button btn">
        <component :is="KlicIcons.LayoutGrid" data-part="icon" />
        대시보드
      </button>
      <button  data-action="mini-nav" data-label="프로젝트" data-part="mini-nav-button btn">
        <component :is="KlicIcons.Folder" data-part="icon" />
        프로젝트
      </button>
      <button  data-action="mini-nav" data-label="팀 멤버" data-part="mini-nav-button btn">
        <component :is="KlicIcons.Users" data-part="icon" />
        팀 멤버
      </button>
    </div>
    <div data-part="mini-sidebar-body">
      <strong>
        대시보드
      </strong>
      <div data-part="tab-line">
      </div>
      <div style="width:70%" data-part="tab-line">
      </div>
      <div style="width:85%" data-part="tab-line">
      </div>
    </div>
  </div>
</template>
