<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="kbd" data-kv-variant="navigation-guide" data-klic-component="kbd" class="kn-kbd">
    <div data-part="tabs">
      <div role="tablist" aria-label="보기" >
        <button type="button" role="tab" id="kv-export-kbd-kbd-navigation-guide-tab-0" aria-controls="kv-export-kbd-kbd-navigation-guide-panel-0" aria-selected="true" tabindex="0" data-kv-action="tab" data-part="btn">
          개요
        </button>
        <button type="button" role="tab" id="kv-export-kbd-kbd-navigation-guide-tab-1" aria-controls="kv-export-kbd-kbd-navigation-guide-panel-1" aria-selected="false" tabindex="-1" data-kv-action="tab" data-part="btn">
          활동
        </button>
      </div>
      <section role="tabpanel" id="kv-export-kbd-kbd-navigation-guide-panel-0" aria-labelledby="kv-export-kbd-kbd-navigation-guide-tab-0" >
        <p data-part="muted">
          프로젝트 개요입니다.
        </p>
      </section>
      <section role="tabpanel" id="kv-export-kbd-kbd-navigation-guide-panel-1" aria-labelledby="kv-export-kbd-kbd-navigation-guide-tab-1" hidden>
        <p data-part="muted">
          최근 팀 활동입니다.
        </p>
      </section>
    </div>
    <p data-part="muted">
      <kbd>
        ←
      </kbd>
      <kbd>
        →
      </kbd>
      탭 이동 ·
      <kbd>
        Home
      </kbd>
      첫 탭
    </p>
  </div>
</template>
