<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="tree" class="kn-tree">
    <div data-part="file-tree">
      <details open>
        <summary>
          <component :is="KlicIcons.Folder" data-part="icon" aria-hidden="true" />
          klic-interface
        </summary>
        <div>
          <details open>
            <summary>
              <component :is="KlicIcons.Folder" data-part="icon" aria-hidden="true" />
              components
            </summary>
            <p>
              <component :is="KlicIcons.FileCode" data-part="icon" aria-hidden="true" />
              button.html
            </p>
            <p>
              <component :is="KlicIcons.FileCode" data-part="icon" aria-hidden="true" />
              input.html
            </p>
          </details>
          <details>
            <summary>
              <component :is="KlicIcons.Folder" data-part="icon" aria-hidden="true" />
              tokens
            </summary>
            <p>
              primitive.json
            </p>
            <p>
              semantic.json
            </p>
          </details>
        </div>
      </details>
    </div>
  </div>
</template>
