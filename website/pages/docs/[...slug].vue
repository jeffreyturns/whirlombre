<script setup lang="ts">
useHead({
  title: 'Home'
})
definePageMeta({
  layout: 'docs'
})

const splitPath = (path?: string) => path?.split('/').filter(item => item !== '') ?? ['']
</script>

<template>
  <div class="px-4 md:px-8 sm:px-6">
    <div class="mx-auto max-w-3xl">
      <article class="relative pt-10 text-base prose">
        <ContentDoc
          v-slot="{ doc }"
          :path="$route.path.slice(6)">
          <article>
            <!-- <div class="pb-8">
                            <span
                                v-for="(it, i) in splitPath(`${doc._path}`)"
                                :key="i">
                                <span class="hover:text-accent-600">
                                    {{ it }}
                                </span>
                                {{ i != splitPath(`${doc._path}`).length - 1 ? '— ' : '' }}
                            </span>
                        </div> -->
            <ContentRenderer :value="doc" />
          </article>
        </ContentDoc>
      </article>
    </div>
  </div>
</template>
