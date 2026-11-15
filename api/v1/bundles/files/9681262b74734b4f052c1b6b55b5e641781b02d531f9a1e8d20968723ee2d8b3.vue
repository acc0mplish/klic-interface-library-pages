<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="timeline" data-kv-variant="delivery" data-klic-component="timeline" class="kn-timeline">
    <ol data-part="timeline">
      <li>
        <component :is="KlicIcons.CircleCheck" data-part="icon" aria-hidden="true" />
        <header data-part="heading">
          <strong>
            접수 완료
          </strong>
          <p data-part="muted">
            10.26 09:00
          </p>
        </header>
      </li>
      <li>
        <component :is="KlicIcons.Clock3" data-part="icon" aria-hidden="true" />
        <header data-part="heading">
          <strong>
            검토 중
          </strong>
          <p data-part="muted">
            담당자 · 김하늘
          </p>
        </header>
      </li>
      <li>
        <header data-part="heading">
          <strong>
            결과 안내 예정
          </strong>
          <p data-part="muted">
            10.28까지
          </p>
        </header>
      </li>
    </ol>
  </div>
</template>
