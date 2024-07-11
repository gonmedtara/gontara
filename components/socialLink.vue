<template>
  <NuxtLink :to="link.path" external :aria-label="link.name">
    <div class="flex items-center justify-start pointer">
      <i class="pi" :class="link.icon" :aria-details="link.name"></i>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
  link: { type: Object, required: true },
});
</script>
