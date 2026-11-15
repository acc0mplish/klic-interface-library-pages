<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="image" data-kv-variant="portrait" data-klic-component="image" class="kn-image">
    <div data-part="portrait-layout">
      <div role="img" aria-label="KLIC DESIGN" data-part="art ratio-portrait">
        <span>
          KLIC
        </span>
        <strong>
          KLIC DESIGN
        </strong>
        <span data-part="art-orbit">
        </span>
      </div>
      <section>
        <header data-part="heading">
          <strong>
            디자인 노트
          </strong>
          <p data-part="muted">
            형태와 여백의 균형
          </p>
        </header>
        <p data-part="muted">
          세로 이미지를 사용한 에디토리얼 구성입니다.
        </p>
      </section>
    </div>
  </div>
</template>
