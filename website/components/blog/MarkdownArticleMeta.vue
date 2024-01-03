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
  <h1
    class="mt-3 text-3xl font-headline sm:text-5xl">
    {{ props.title }}
  </h1>
  <p class="mt-6 text-lg leading-8 text-surface-700">
    {{ props.description }}
  </p>
  <div class="mb-10 h-[1px] w-full bg-surface-950/0 lg:mb-18" />
</template>
