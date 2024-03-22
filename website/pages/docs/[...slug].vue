<script setup lang="ts">
useHead({ title: 'Home' })
definePageMeta({ layout: 'docs' })

const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})
</script>

<template>
  <div class="px-4 sm:px-6 md:px-8">
    <div class="mx-auto max-w-3xl">
      <article v-if="page" class="prose prose-code:bg-gray-100 prose-code:dark:bg-gray-800 prose-code:text-gray-900 prose-code:dark:text-gray-100 prose-code:before:content-none prose-code:after:content-none relative max-w-none text-wrap text-base">
        <EmojiHeader :emoji="page.emoji" />
        <ContentRenderer :value="page" />
      </article>
    </div>
  </div>
</template>
