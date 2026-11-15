<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="menubar" data-kv-variant="icon-commands" data-klic-component="menubar" class="kn-menubar">
    <div role="menubar" aria-label="자료 메뉴" data-part="menubar">
      <div data-part="bar-item">
        <button type="button" role="menuitem" data-kv-action="menubar-open" aria-haspopup="menu" aria-expanded="false" aria-controls="kv-export-menubar-menubar-icon-commands-data-menu" data-part="btn">
          자료
        </button>
        <div data-klic-surface="overlay" id="kv-export-menubar-menubar-icon-commands-data-menu" role="menu" aria-label="자료" data-kv-context-menu popover="manual" hidden data-part="bar-popup" data-state="closed">
          <button type="button" role="menuitem" data-kv-action="choose"  data-part="btn">
            <component :is="KlicIcons.Upload" data-part="icon" aria-hidden="true" />
            가져오기
          </button>
          <button type="button" role="menuitem" data-kv-action="choose"  data-part="btn">
            <component :is="KlicIcons.Download" data-part="icon" aria-hidden="true" />
            내보내기
          </button>
          <button type="button" role="menuitem" data-kv-action="copy-text" data-kv-value="klic_project_2026" data-part="btn">
            <component :is="KlicIcons.Copy" data-part="icon" aria-hidden="true" />
            식별자 복사
          </button>
        </div>
      </div>
      <div data-part="bar-item">
        <button type="button" role="menuitem" data-kv-action="menubar-open" aria-haspopup="menu" aria-expanded="false" aria-controls="kv-export-menubar-menubar-icon-commands-share-menu" data-part="btn">
          공유
        </button>
        <div data-klic-surface="overlay" id="kv-export-menubar-menubar-icon-commands-share-menu" role="menu" aria-label="공유" data-kv-context-menu popover="manual" hidden data-part="bar-popup" data-state="closed">
          <button type="button" role="menuitem" data-kv-action="copy-text" data-kv-value="https://example.com/project" data-part="btn">
            <component :is="KlicIcons.Link" data-part="icon" aria-hidden="true" />
            링크 복사
          </button>
          <button type="button" role="menuitem" data-kv-action="choose"  data-part="btn">
            <component :is="KlicIcons.Users" data-part="icon" aria-hidden="true" />
            멤버 초대 준비
          </button>
        </div>
      </div>
    </div>
    <p data-part="muted">
      좌우 방향키로 메뉴 사이를 이동하고 Escape로 닫습니다.
    </p>
    <output aria-live="polite" data-part="output">
    </output>
  </div>
</template>
