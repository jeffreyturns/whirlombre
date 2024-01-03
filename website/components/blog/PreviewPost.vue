<script lang="ts" setup>

const { data } = await useAsyncData('posts', () => fetchContentNavigation(queryContent('blog')))

const posts = computed(() => data.value?.[0].children)
</script>

<template>
  <div v-for="(post, i) in posts" :key="i">
    <MotionContainer type="fade-in" :delay="120 * i">
      <article class="flex flex-col items-start justify-between rounded-wl-small p-4 transition-wl-colors hover:bg-surface-50">
        <NuxtLink :to="post._path">
          <div class="relative w-full">
            <img :src="post.cover" alt="" class="aspect-[16/9] w-full rounded-wl-small bg-surface-100 object-cover lg:aspect-[3/2] sm:aspect-[2/1]">
            <div class="absolute inset-0 rounded-wl-small ring-1 ring-surface-950/12 ring-inset" />
          </div>
          <div class="max-w-xl">
            <div class="mt-8 flex items-center gap-x-4 text-xs">
              <time :datetime="formatDate(post.publishedAt)" class="text-accent-500">{{ formatDate(post.publishedAt) }}</time>
            </div>
            <div class="relative">
              <h3 class="mt-3 text-lg font-headline font-300 leading-6 text-surface-800">
                <span class="absolute inset-0" />
                {{ post.title }}
              </h3>
              <p class="line-clamp-3 mt-5 text-sm leading-6 text-surface-600">
                {{ post.desc }}
              </p>
            </div>
          </div>
        </NuxtLink>
      </article>
    </MotionContainer>
  </div>
</template>
