<script setup lang="ts">
const paletteStore = usePaletteStore()
</script>

<template>
  <UContainer class="mt-[--header-height]">
    <MotionContainer type="fade-in">
      <div class="py-6 lg:flex lg:items-center lg:justify-between">
        <div class="flex min-w-0 space-x-3">
          <ModalAddShade />

          <!-- <UButton variant="outline" label="Export" icon="i-material-symbols-download" /> -->
          <ModalExportShades />
        </div>
        <div class="mt-3 flex lg:ml-4 lg:mt-0">
          <UButton label="Add Random" icon="i-material-symbols-shuffle" @click="paletteStore.addRandomShade()" />
        </div>
      </div>

      <UDivider />
    </MotionContainer>

    <MotionContainer type="fade-in" :delay="150">
      <ShadePalette
        v-for="shade in paletteStore.shades"
        :key="shade.id"
        :shade="shade" />
      <div v-if="paletteStore.shades.length === 0" class="h-96 text-center ring-1 ring-red-200">
        <span>TODO: No Shades Imagery</span>
      </div>
    </MotionContainer>
  </UContainer>
</template>
