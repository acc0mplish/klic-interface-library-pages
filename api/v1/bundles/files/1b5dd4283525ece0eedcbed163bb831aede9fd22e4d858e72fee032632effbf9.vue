<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from '../../../vue-component-runtime.mjs';
useKlicNativeComponent();
</script>

<template>
  <div data-kv-root data-klic-material="surface" data-kv-component="kbd" data-kv-variant="help-dialog" data-klic-component="kbd" class="kn-kbd">
    <button type="button" data-klic-surface="control" data-kv-action="open" data-kv-target="kv-export-kbd-kbd-help-dialog-dialog" data-part="btn">
      단축키 보기
    </button>
    <dialog id="kv-export-kbd-kbd-help-dialog-dialog" aria-label="단축키 안내" data-klic-surface="overlay" data-part="dialog">
      <header data-part="heading">
        <strong>
          단축키 안내
        </strong>
      </header>
      <div tabindex="0" role="region" aria-label="데이터 표" data-part="table-scroll">
        <table >
          <thead>
            <tr>
              <th scope="col">
                작업
              </th>
              <th scope="col">
                키
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                검색
              </td>
              <td>
                <kbd>
                  ⌘ K
                </kbd>
              </td>
            </tr>
            <tr>
              <td>
                패널 닫기
              </td>
              <td>
                <kbd>
                  Esc
                </kbd>
              </td>
            </tr>
            <tr>
              <td>
                다음 항목
              </td>
              <td>
                <kbd>
                  Tab
                </kbd>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <footer class="ku-actions" data-part="actions">
        <button type="button" data-klic-surface="control" data-kv-action="close"  data-part="btn">
          닫기
        </button>
      </footer>
    </dialog>
  </div>
</template>
