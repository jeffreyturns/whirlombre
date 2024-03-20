<template>
  <h2 :id="id" class="scroll-mt-20">
    <a
      v-if="id && generate"
      class="font-headline text-gray-900 no-underline hover:underline dark:text-gray-100"
      :href="`#${id}`">
      <slot />
    </a>
    <slot v-else />
  </h2>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && headings?.anchorLinks?.h2)
</script>
