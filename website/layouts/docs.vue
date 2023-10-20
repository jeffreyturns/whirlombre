<script setup lang="ts">
import DefaultLayout from '~/layouts/default.vue'

const { data: docs } = await useAsyncData('docs', () => fetchContentNavigation(queryContent('docs')))

const innerDocs = computed(() => docs.value?.[0].children)
</script>

<template>
  <DefaultLayout>
    <div class="pb-16 pt-8">
      <div class="mx-auto max-w-6xl px-4 lg:px-8 sm:px-6">
        <div class="relative gap-8 lg:grid lg:grid-cols-4">
          <aside class="mr-3 hidden overflow-y-auto px-2 pb-8 lg:sticky lg:top-[4rem] -ml-3 lg:block lg:max-h-[calc(100vh-4rem)] lg:self-start lg:pt-8 lg:-mt-8 sm:-mb-16">
            <DocsSearchBox />
            <div class="space-y-3">
              <div
                v-for="item of innerDocs"
                :key="item.name"
                class="relative">
                <div class="text-surace-950 px-2.5 py-1 text-sm font-medium">
                  <span class="truncate">{{ item.title }}</span>
                </div>
                <nav
                  v-for="sub in item.children"
                  :key="sub.name"
                  class="relative mt-1">
                  <NuxtLink
                    :to="sub._path"
                    :class="[
                      $route.path == sub._path
                        ? 'bg-accent-100 text-surface-950'
                        : 'text-surface-700 hover:bg-surface-950/12'
                    ]"
                    class="group relative w-full flex items-center gap-2 rounded-wl-small px-3 py-1.5 text-sm font-medium focus:outline-none">
                    <span class="h-4 w-4 flex-shrink-0" />

                    <span class="relative truncate">{{ sub.title }}</span>
                  </NuxtLink>
                </nav>
              </div>
            </div>
          </aside>
          <div class="flex px-3 lg:hidden">
            <nav class="mt-8 w-full">
              <div class="sticky py-3 space-y-3 lg:py-8">
                <BaseAccordion class="b-b-px border-surface-200">
                  <template #header="{ isExpanded }">
                    <span class="text-base font-semibold leading-7">Navigation</span>
                    <span class="ml-6 h-7 flex items-center">
                      <BaseIcon
                        class="shrink-0"
                        :icon="isExpanded ? 'expand_less' : 'expand_more'"
                        :size="24" />
                    </span>
                  </template>
                  <template #content>
                    <DocsSearchBox class="flex flex-shrink-0" />
                    <div
                      v-for="item of innerDocs"
                      :key="item.name"
                      class="relative mx-3 mb-3">
                      <div class="text-surace-950 px-2.5 py-1 text-sm font-medium">
                        <span class="truncate">{{ item.title }}</span>
                      </div>
                      <nav
                        v-for="sub in item.children"
                        :key="sub.name"
                        class="relative mt-1">
                        <NuxtLink
                          :to="sub._path"
                          :class="[
                            $route.path == sub._path
                              ? 'bg-accent-100 text-surface-950'
                              : 'text-surface-700 hover:bg-surface-950/12'
                          ]"
                          class="group relative w-full flex items-center gap-2 rounded-wl-small px-3 py-1.5 text-sm font-medium focus:outline-none">
                          <span class="h-4 w-4 flex-shrink-0" />

                          <span class="relative truncate">{{ sub.title }}</span>
                        </NuxtLink>
                      </nav>
                    </div>
                  </template>
                </BaseAccordion>
              </div>
            </nav>
          </div>
          <main class="relative col-span-4 lg:col-span-3">
            <slot />
          </main>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
