<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="skeleton" data-kv-variant="table" data-klic-component="skeleton" class="kn-skeleton">
    <div role="status" aria-label="표 데이터 불러오는 중">
      <div tabindex="0" role="region" aria-label="데이터 표" data-part="table-scroll">
        <table >
          <thead>
            <tr>
              <th scope="col">
                프로젝트
              </th>
              <th scope="col">
                담당
              </th>
              <th scope="col">
                상태
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span data-part="skeleton sk-line">
                </span>
              </td>
              <td>
                <span data-part="skeleton sk-line">
                </span>
              </td>
              <td>
                <span data-part="skeleton sk-line">
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span data-part="skeleton sk-line">
                </span>
              </td>
              <td>
                <span data-part="skeleton sk-line">
                </span>
              </td>
              <td>
                <span data-part="skeleton sk-line">
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span data-part="skeleton sk-line">
                </span>
              </td>
              <td>
                <span data-part="skeleton sk-line">
                </span>
              </td>
              <td>
                <span data-part="skeleton sk-line">
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p data-part="muted">
        표 데이터를 불러오는 중입니다.
      </p>
    </div>
  </div>
</template>
