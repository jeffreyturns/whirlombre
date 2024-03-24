<script setup lang="ts">
const paletteStore = usePaletteStore()
</script>

<template>
  <UContainer class="mt-16">
    <div class="py-6 lg:flex lg:items-center lg:justify-between">
      <div class="flex min-w-0 space-x-3">
        <UButton label="Add Shade" icon="i-material-symbols-add" />

        <UButton variant="outline" label="Export" icon="i-material-symbols-download" />
      </div>
      <div class="mt-3 flex lg:ml-4 lg:mt-0">
        <UButton label="Add Random" icon="i-material-symbols-shuffle" @click="paletteStore.addRandomShade()" />
      </div>
    </div>

    <UDivider />

    <ShadePalette
      v-for="shade in paletteStore.shades"
      :key="shade.id"
      :shade="shade" />
  </UContainer>
</template>
