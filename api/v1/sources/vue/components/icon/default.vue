<script setup>
import * as KlicIcons from '@lucide/vue';
import {useKlicNativeComponent} from 'klic-design/components/vue/runtime';
useKlicNativeComponent();
</script>

<template>
  <div data-klic-component="icon" class="kn-icon">
    <div data-part="icon-grid">
      <div>
        <component :is="KlicIcons.Folder" data-part="icon" aria-hidden="true" />
        <small>
          folder
        </small>
      </div>
      <div>
        <component :is="KlicIcons.CalendarDays" data-part="icon" aria-hidden="true" />
        <small>
          calendar-days
        </small>
      </div>
      <div>
        <component :is="KlicIcons.Layers" data-part="icon" aria-hidden="true" />
        <small>
          layers
        </small>
      </div>
      <div>
        <component :is="KlicIcons.Bell" data-part="icon" aria-hidden="true" />
        <small>
          bell
        </small>
      </div>
      <div>
        <component :is="KlicIcons.Search" data-part="icon" aria-hidden="true" />
        <small>
          search
        </small>
      </div>
      <div>
        <component :is="KlicIcons.Settings2" data-part="icon" aria-hidden="true" />
        <small>
          settings-2
        </small>
      </div>
      <div>
        <component :is="KlicIcons.FileCode" data-part="icon" aria-hidden="true" />
        <small>
          file-code
        </small>
      </div>
      <div>
        <component :is="KlicIcons.Users" data-part="icon" aria-hidden="true" />
        <small>
          users
        </small>
      </div>
    </div>
  </div>
</template>
