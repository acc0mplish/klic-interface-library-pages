<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="segmented-control" data-kv-variant="view" data-klic-component="segmented-control" class="kn-segmented-control">
    <header data-part="heading">
      <strong>
        프로젝트 표시
      </strong>
    </header>
    <div data-part="segment segment-icons">
      <fieldset data-part="choices">
        <legend>
          한 가지 선택
        </legend>
        <label>
          <input type="radio" name="kv-export-segmented-control-segmented-control-view" value="&lt;i data-part=&quot;icon&quot; data-lucide=&quot;layout-grid&quot; aria-hidden=&quot;true&quot;&gt;&lt;/i&gt; 격자" checked data-part="radio">
          <span>
            <strong>
              <component :is="KlicIcons.LayoutGrid" data-part="icon" aria-hidden="true" />
              격자
            </strong>
          </span>
        </label>
        <label>
          <input type="radio" name="kv-export-segmented-control-segmented-control-view" value="&lt;i data-part=&quot;icon&quot; data-lucide=&quot;list&quot; aria-hidden=&quot;true&quot;&gt;&lt;/i&gt; 목록"  data-part="radio">
          <span>
            <strong>
              <component :is="KlicIcons.List" data-part="icon" aria-hidden="true" />
              목록
            </strong>
          </span>
        </label>
      </fieldset>
    </div>
    <p data-part="muted">
      한 번에 한 가지 보기만 선택됩니다.
    </p>
  </div>
</template>
