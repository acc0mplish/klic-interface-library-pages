<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="icon" data-kv-variant="feature-grid" data-klic-component="icon" class="kn-icon">
    <div class="ku-grid-2" data-part="grid-2">
      <section data-klic-surface="card" data-part="panel">
        <header data-part="heading">
          <strong>
            <component :is="KlicIcons.ShieldCheck" data-part="icon" aria-hidden="true" />
            안전한 공유
          </strong>
        </header>
        <p data-part="muted">
          팀의 작업을 연결합니다.
        </p>
      </section>
      <section data-klic-surface="card" data-part="panel">
        <header data-part="heading">
          <strong>
            <component :is="KlicIcons.Users" data-part="icon" aria-hidden="true" />
            함께 작업
          </strong>
        </header>
        <p data-part="muted">
          팀의 작업을 연결합니다.
        </p>
      </section>
      <section data-klic-surface="card" data-part="panel">
        <header data-part="heading">
          <strong>
            <component :is="KlicIcons.Layers" data-part="icon" aria-hidden="true" />
            일관된 토큰
          </strong>
        </header>
        <p data-part="muted">
          팀의 작업을 연결합니다.
        </p>
      </section>
      <section data-klic-surface="card" data-part="panel">
        <header data-part="heading">
          <strong>
            <component :is="KlicIcons.Zap" data-part="icon" aria-hidden="true" />
            빠른 시작
          </strong>
        </header>
        <p data-part="muted">
          팀의 작업을 연결합니다.
        </p>
      </section>
    </div>
  </div>
</template>
