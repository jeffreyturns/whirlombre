<script setup lang="ts">
useHead({ title: 'Home' })
definePageMeta({ layout: 'docs' })

const docsQueryParams = queryContent('docs').params
</script>

<template>
  <div class="px-4 md:px-8 sm:px-6">
    <div class="mx-auto max-w-3xl">
      <article class="relative pt-10 text-base prose">
        <ContentDoc
          v-slot="{ doc }"
          :query="docsQueryParams">
          <DocsImageHeader />
          <ContentRenderer :value="doc" />
        </ContentDoc>
      </article>
    </div>
  </div>
</template>
