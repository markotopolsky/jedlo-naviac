<script setup>
import { RouterLink, useLink } from 'vue-router'

const props = defineProps({
  to: { type: [String, Object], required: true },
  class: { type: String, default: '' },
  activeClass: { type: String, default: '' },
  pendingClass: { type: String, default: '' },
})
</script>

<template>
  <RouterLink
    :to="to"
    :class="props.class"
    :active-class="props.activeClass"
  >
    <slot />
  </RouterLink>
</template>