<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="popover" class="kn-popover" data-state="closed">
    <div data-part="popover-anchor">
      <button data-action="popover" aria-controls="export-popover-default-popover" aria-expanded="false" class="kv-neutral" data-part="btn">
        <component :is="KlicIcons.SlidersHorizontal" data-part="icon" />
        프로젝트 옵션
        <component :is="KlicIcons.ChevronDown" data-part="icon" />
      </button>
      <div popover="auto" id="export-popover-default-popover" data-part="popover-menu" data-state="closed">
        <button data-action="popover-choice" data-choice="프로젝트 이름 변경" data-part="btn">
          <component :is="KlicIcons.Pencil" data-part="icon" />
          이름 변경
        </button>
        <button data-action="popover-choice" data-choice="링크 복사" data-part="btn">
          <component :is="KlicIcons.Copy" data-part="icon" />
          링크 복사
        </button>
        <button data-action="popover-choice" data-choice="보관하기" data-part="btn">
          <component :is="KlicIcons.Archive" data-part="icon" />
          보관하기
        </button>
      </div>
    </div>
    <span>
      클릭해서 옵션을 열어보세요.
    </span>
  </div>
</template>
