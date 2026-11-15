<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="descriptions" data-kv-variant="billing" data-klic-component="descriptions" class="kn-descriptions">
    <header data-part="heading">
      <strong>
        이번 달 청구
      </strong>
    </header>
    <dl data-part="description">
      <div>
        <dt>
          플랜
        </dt>
        <dd>
          Team · 5석
        </dd>
      </div>
      <div>
        <dt>
          결제 수단
        </dt>
        <dd>
          카드 •••• 1234
        </dd>
      </div>
      <div>
        <dt>
          다음 결제
        </dt>
        <dd>
          2026.11.26
        </dd>
      </div>
    </dl>
    <div class="ku-row" data-part="row">
      <span>
        <strong>
          합계
        </strong>
      </span>
      <span>
        <strong>
          ₩60,000
        </strong>
      </span>
    </div>
  </div>
</template>
