<script setup lang="ts">
useHead({ title: 'Home' })
definePageMeta({ layout: 'docs' })

const docsQueryParams = queryContent('docs').params
</script>

<template>
  <div class="px-4 sm:px-6 md:px-8">
    <div class="mx-auto max-w-3xl">
      <article class="prose prose-code:bg-gray-100 prose-code:dark:bg-gray-800 prose-code:text-gray-900 prose-code:dark:text-gray-100 prose-code:before:content-none prose-code:after:content-none relative text-base">
        <ContentDoc
          v-slot="{ doc }"
          :query="docsQueryParams">
          <!-- <DocsImageHeader :emoji="doc.emoji" /> -->
          <ContentRenderer :value="doc" />
        </ContentDoc>
      </article>
    </div>
  </div>
</template>
