<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="descriptions" data-kv-variant="account" data-klic-component="descriptions" class="kn-descriptions">
    <div class="ku-row" data-part="row">
      <span>
        <span aria-label="김" data-part="avatar">
          김
        </span>
      </span>
      <span>
        <header data-part="heading">
          <strong>
            김하늘
          </strong>
          <p data-part="muted">
            팀 관리자
          </p>
        </header>
      </span>
    </div>
    <dl data-part="description">
      <div>
        <dt>
          이메일
        </dt>
        <dd>
          haneul@example.com
        </dd>
      </div>
      <div>
        <dt>
          부서
        </dt>
        <dd>
          제품 디자인
        </dd>
      </div>
      <div>
        <dt>
          가입일
        </dt>
        <dd>
          2026.01.15
        </dd>
      </div>
    </dl>
  </div>
</template>
