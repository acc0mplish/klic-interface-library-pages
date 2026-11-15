<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="kbd" data-kv-variant="shortcut" data-klic-component="kbd" class="kn-kbd">
    <header data-part="heading">
      <strong>
        문서 단축키
      </strong>
    </header>
    <div class="ku-row" data-part="row">
      <span>
        검색 열기
      </span>
      <span>
        <span>
          <kbd>
            ⌘
          </kbd>
          <kbd>
            K
          </kbd>
        </span>
      </span>
    </div>
    <div class="ku-row" data-part="row">
      <span>
        변경 저장
      </span>
      <span>
        <span>
          <kbd>
            ⌘
          </kbd>
          <kbd>
            S
          </kbd>
        </span>
      </span>
    </div>
    <p data-part="muted">
      단축키 표기 예제이며 브라우저 단축키를 가로채지 않습니다.
    </p>
  </div>
</template>
