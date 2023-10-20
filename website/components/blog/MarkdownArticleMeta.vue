<script lang="ts" setup>

type NuxtContentMarkdownMeta = any

type MarkdownArticleMetaProps = {
    title: string| undefined
    description: NuxtContentMarkdownMeta
    cover: NuxtContentMarkdownMeta
    publishedAt: NuxtContentMarkdownMeta
}

const props = defineProps<MarkdownArticleMetaProps>()

</script>

<template>
  <div class="relative w-full">
    <img :src="props.cover" :alt="props.title" class="aspect-[16/9] w-full rounded-wl-small bg-surface-100 object-cover lg:aspect-[2/1]">
    <div class="absolute inset-0 rounded-wl-small ring-1 ring-surface-950/12 ring-inset" />
  </div>
  <p class="mt-6 text-base text-surface-600">
    <time :datetime="formatDate(props.publishedAt)">{{ formatDate(props.publishedAt) }}</time>
  </p>
  <h1
    class="mt-3 text-3xl font-headline sm:text-5xl">
    {{ props.title }}
  </h1>
  <p class="mt-6 text-lg leading-8 text-surface-700">
    {{ props.description }}
  </p>
  <div class="mb-10 h-[1px] w-full bg-surface-950/12 lg:mb-18" />
</template>
