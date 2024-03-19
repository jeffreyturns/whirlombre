<script setup lang="ts">
const { data, pending, error, refresh } = await useAsyncData(
  'posts',
  () => $fetch('https://fakeApi.com/posts')
)
</script>

<template>
  <UContainer class="mt-16">
    {{ data }}
  </UContainer>
</template>
