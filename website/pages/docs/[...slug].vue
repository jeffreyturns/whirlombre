<script setup lang="ts">
useHead({ title: 'Home' })
definePageMeta({ layout: 'docs' })

const docsQuery = queryContent('docs')
</script>

<template>
  <div class="px-4 md:px-8 sm:px-6">
    <div class="mx-auto max-w-3xl">
      <article class="relative pt-10 text-base prose">
        <ContentDoc
          v-slot="{ doc }"
          :query="docsQuery.params">
          <article>
            <ContentRenderer :value="doc" />
          </article>
        </ContentDoc>
      </article>
    </div>
  </div>
</template>
