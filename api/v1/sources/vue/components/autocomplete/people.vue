<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="autocomplete" data-kv-variant="people" data-klic-component="autocomplete" class="kn-autocomplete">
    <header data-part="heading">
      <strong>
        프로젝트 담당자
      </strong>
    </header>
    <label data-part="field">
      <span>
        이름
      </span>
      <input list="kv-export-autocomplete-autocomplete-people-suggest"  placeholder="입력하거나 후보를 선택하세요" data-part="input">
    </label>
    <datalist id="kv-export-autocomplete-autocomplete-people-suggest">
      <option value="김하늘 · 디자인">
      </option>
      <option value="이도윤 · 개발">
      </option>
      <option value="박서연 · 리서치">
      </option>
    </datalist>
    <p data-part="muted">
      브라우저 기본 제안 목록을 사용하며 자유 입력도 가능합니다.
    </p>
  </div>
</template>
