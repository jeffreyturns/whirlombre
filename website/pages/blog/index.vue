<script lang="ts" setup>
useHead({ title: 'Blog' })

</script>

<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-surface-900 sm:text-4xl">
          From the blog
        </h2>
        <p class="mt-2 text-lg leading-8 text-surface-600">
          Learn how to grow your business with our expert advice.
        </p>
      </div>
      <div class="grid grid-cols-1 mx-auto mt-16 max-w-2xl gap-x-8 gap-y-20 lg:grid-cols-3 lg:mx-0 lg:max-w-none">
        <BlogPreviewPost />
      </div>
    </div>
  </div>
</template>
