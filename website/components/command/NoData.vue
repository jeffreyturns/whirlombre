<script setup lang="ts">
const query = useQuery()

const clearSearch = () => {
  query.value = ''
}
</script>

<template>
  <div class="relative isolate overflow-hidden">
    <svg width="1085" height="1089" class="absolute h-full w-full scale-150 stroke-surface-950 -z-10 -translate-y-16" viewBox="0 0 1085 1089" fill="none">
      <path opacity="0.20" d="M542.5 1088L542.443 545.04L429.5 1076.12L542.332 545.017L321.439 1041.01L542.228 544.971L223.039 984.201L542.137 544.904L138.601 908.172L542.06 544.819L71.8153 816.25L542.004 544.721L25.6008 712.451L541.969 544.613L1.97754 601.311L541.957 544.5L1.97755 487.689L541.969 544.387L25.6009 376.549L542.004 544.279L71.8153 272.75L542.06 544.18L138.601 180.827L542.137 544.096L223.039 104.799L542.228 544.029L321.439 47.988L542.332 543.983L429.5 12.8768L542.443 543.959L542.5 1L542.557 543.959L655.5 12.8768L542.668 543.983L763.562 47.9881L542.772 544.029L861.962 104.799L542.864 544.096L946.399 180.828L542.94 544.18L1013.19 272.75L542.997 544.279L1059.4 376.549L543.032 544.387L1083.02 487.689L543.044 544.5L1083.02 601.311L543.032 544.613L1059.4 712.451L542.997 544.721L1013.18 816.25L542.94 544.819L946.399 908.172L542.864 544.904L861.961 984.201L542.772 544.971L763.562 1041.01L542.668 545.017L655.5 1076.12L542.557 545.04L542.5 1088Z" stroke="currentColor" stroke-width="0.5" />
    </svg>
    <div
      class="px-4 py-14 text-center sm:px-14">
      <BaseIcon
        class="scale-150 rounded-wl-small bg-accent-50 p-1 text-accent-950"
        icon="manage_search" />
      <p class="mt-6 text-base text-surface-900">
        No Results Found.
      </p>
      <p class="mt-1 text-sm text-surface-700">
        Oops! It seems there's nothing matching your criteria. Try refining your search or entering a different command.
      </p>
      <BaseButton class="mt-4 px-2 py-1.5" variant="outlined" text="Clear search" @click="clearSearch()" />
    </div>
  </div>
</template>
