<script setup lang="ts">
import DefaultLayout from '~/layouts/default.vue'
</script>

<template>
  <DefaultLayout>
    <div class="pb-16 pt-8">
      <div class="mx-auto max-w-6xl px-4 lg:px-8 sm:px-6">
        <div class="relative gap-8 lg:grid lg:grid-cols-4">
          <aside class="mr-3 hidden overflow-y-auto pb-8 lg:sticky lg:top-12 -ml-3 lg:block lg:self-start lg:pt-8 lg:-mt-8 sm:-mb-16">
            <button
              class="mb-6 w-full flex flex-shrink-0 items-center justify-center gap-x-1.5 rounded-wl-small bg-surface-50 px-2.5 py-2.5 text-sm font-medium hover:bg-surface-100 focus:outline-none"
              type="button">
              <span
                class="h-5 w-5 flex-shrink-0"
                aria-hidden="true">
                <svg
                  width="18px"
                  height="18px"
                  fill="none"
                  class="text-surface-500"
                  stroke-width="1.5"
                  viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="square"
                    stroke-linejoin="square"
                    d="m17 17 4 4M3 11a8 8 0 1 0 16 0 8 8 0 0 0-16 0Z" />
                </svg>
              </span>
              Search
              <div class="ml-auto hidden gap-0.5 lg:inline-flex">
                <!-- <kbd
                                    class="inline-flex items-center justify-center text-surface-900 dark:text-white h-5 min-w-[20px] text-[11px] px-1 rounded font-medium font-sans bg-surface-100 dark:bg-surface-800 ring-1 ring-surface-300 dark:ring-surface-700 ring-inset">
                                    Ctrl
                                </kbd>
                                <kbd
                                    class="inline-flex items-center justify-center text-surface-900 dark:text-white h-5 min-w-[20px] text-[11px] px-1 rounded font-medium font-sans bg-surface-100 dark:bg-surface-800 ring-1 ring-surface-300 dark:ring-surface-700 ring-inset">
                                    K
                                </kbd> -->
              </div>
            </button>
            <div class="space-y-3">
              <ContentNavigation v-slot="{ navigation }">
                <div
                  v-for="item of navigation"
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
                      :to="`/docs${sub._path}`"
                      :class="[
                        $route.path == `/docs${sub._path}`
                          ? 'bg-accent-100 text-surface-950'
                          : 'text-surface-700 hover:bg-surface-950/12'
                      ]"
                      class="group relative w-full flex items-center gap-2 rounded-wl-small px-3 py-1.5 text-sm font-medium focus:outline-none">
                      <span class="h-4 w-4 flex-shrink-0" />

                      <span class="relative truncate">{{ sub.title }}</span>
                    </NuxtLink>
                  </nav>
                </div>
              </ContentNavigation>
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
                        :icon="isExpanded ? 'navArrowUp' : 'navArrowDown'"
                        :size="24" />
                    </span>
                  </template>
                  <template #content>
                    <button
                      class="mb-6 w-full flex flex-shrink-0 gap-x-1.5 rounded-wl-small bg-surface-50 px-2.5 py-2.5 text-sm font-medium hover:bg-surface-100 focus:outline-none"
                      type="button">
                      <span
                        class="h-5 w-5 flex-shrink-0"
                        aria-hidden="true">
                        <svg
                          width="18px"
                          height="18px"
                          fill="none"
                          class="text-surface-500"
                          stroke-width="1.5"
                          viewBox="0 0 24 24">
                          <path
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="square"
                            stroke-linejoin="square"
                            d="m17 17 4 4M3 11a8 8 0 1 0 16 0 8 8 0 0 0-16 0Z" />
                        </svg>
                      </span>
                      Search
                    </button>
                    <ContentNavigation v-slot="{ navigation }">
                      <div
                        v-for="item of navigation"
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
                            :to="`/docs${sub._path}`"
                            :class="[
                              $route.path == `/docs${sub._path}`
                                ? 'bg-accent-100 text-surface-950'
                                : 'text-surface-700 hover:bg-surface-950/12'
                            ]"
                            class="group relative w-full flex items-center gap-2 rounded-wl-small px-3 py-1.5 text-sm font-medium focus:outline-none">
                            <span class="h-4 w-4 flex-shrink-0" />

                            <span class="relative truncate">{{ sub.title }}</span>
                          </NuxtLink>
                        </nav>
                      </div>
                    </ContentNavigation>
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
