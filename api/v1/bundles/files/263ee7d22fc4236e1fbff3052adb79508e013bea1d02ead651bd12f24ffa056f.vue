<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="empty-state" data-kv-variant="all-done" data-klic-component="empty-state" class="kn-empty-state">
    <section data-part="empty">
      <component :is="KlicIcons.CircleCheck" data-part="icon" aria-hidden="true" />
      <header data-part="heading">
        <strong>
          모든 검토를 마쳤습니다
        </strong>
        <p data-part="muted">
          오늘 요청된 8건을 모두 확인했습니다.
        </p>
      </header>
      <details  data-part="details">
        <summary>
          완료 내역
        </summary>
        <div>
          <ul data-part="list">
            <li>
              문서 검토 5건
            </li>
            <li>
              컴포넌트 검토 3건
            </li>
          </ul>
        </div>
      </details>
    </section>
  </div>
</template>
