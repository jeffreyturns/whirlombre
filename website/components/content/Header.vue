<template>
  <div
    class="text-3xl font-headline text-accent-700">
    <ContentSlot
      :use="$slots.default"
      unwrap="h1" />
  </div>
</template>
