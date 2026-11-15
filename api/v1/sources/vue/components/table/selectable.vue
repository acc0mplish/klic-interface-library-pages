<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="table" data-kv-variant="selectable" data-klic-component="table" class="kn-table">
    <div tabindex="0" role="region" aria-label="데이터 표" data-part="table-scroll">
      <table >
        <thead>
          <tr>
            <th scope="col">
              선택
            </th>
            <th scope="col">
              문서
            </th>
            <th scope="col">
              수정일
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" aria-label="브랜드 가이드 선택" data-part="checkbox">
            </td>
            <td>
              브랜드 가이드
            </td>
            <td>
              10.26
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" aria-label="토큰 사양 선택" data-part="checkbox">
            </td>
            <td>
              토큰 사양
            </td>
            <td>
              10.25
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" aria-label="접근성 기준 선택" data-part="checkbox">
            </td>
            <td>
              접근성 기준
            </td>
            <td>
              10.24
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <button type="button" data-klic-surface="control" data-kv-action="selection-action"  data-part="btn">
      선택 문서 보관
    </button>
    <output aria-live="polite" data-part="output">
    </output>
  </div>
</template>
