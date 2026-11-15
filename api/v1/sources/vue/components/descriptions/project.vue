<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="descriptions" data-kv-variant="project" data-klic-component="descriptions" class="kn-descriptions">
    <dl data-part="description">
      <div>
        <dt>
          프로젝트
        </dt>
        <dd>
          KLIC 라이브러리
        </dd>
      </div>
      <div>
        <dt>
          담당자
        </dt>
        <dd>
          김하늘
        </dd>
      </div>
      <div>
        <dt>
          상태
        </dt>
        <dd>
          진행 중
        </dd>
      </div>
      <div>
        <dt>
          마감
        </dt>
        <dd>
          2026.10.30
        </dd>
      </div>
    </dl>
  </div>
</template>
