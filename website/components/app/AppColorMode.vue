<script setup lang="ts">
const colorMode = useColorMode()

const currentMode = computed({
  get: () => uppercaseFirstLetter(colorMode.preference),
  set: (value) => {
    colorMode.preference = value.toLowerCase()
  }
})

const uppercaseFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1)

</script>

<template>
  <ClientOnly>
    <ColorScheme>
      <USelectMenu
        v-slot="{ open }"
        v-model="currentMode"
        class="min-w-32"
        :popper="{ placement: 'top' }"
        :options="['System', 'Light', 'Dark']">
        <UButton
          class="flex-1 justify-between">
          {{ currentMode }}
          <UIcon name="i-material-symbols-arrow-upward-alt" class="size-5 flex-none transition-transform" :class="{ 'rotate-180': open }" aria-hidden="true" />
        </UButton>
      </USelectMenu>
    </ColorScheme>
    <template #fallback>
      <USkeleton class="h-9 w-36" />
    </template>
  </ClientOnly>
</template>
