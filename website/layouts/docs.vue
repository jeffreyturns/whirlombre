<script setup lang="ts">
const { data: docs } = await useAsyncData('docs', () => fetchContentNavigation(queryContent('docs')))

const innerDocs = computed(() => docs.value?.[0].children)

const ui = { item: { padding: '!px-0 space-y-px !py-px' } }
</script>

<template>
  <UContainer class="mt-20">
    <div class="mx-auto flex w-full items-start gap-x-8">
      <aside class="sticky top-20 hidden h-[calc(100vh-70px)] w-64 shrink-0 lg:block">
        <UAccordion multiple :ui="ui" :items="innerDocs" default-open>
          <template #default="{ item, open }">
            <UButton class="my-px" variant="ghost">
              <!-- <UIcon name="i-material-symbols-breaking-news-outline-sharp" class="size-5" /> -->
              <span class="truncate">{{ item.title }}</span>
              <template #trailing>
                <UIcon
                  name="i-material-symbols-keyboard-arrow-down"
                  class="ms-auto size-5 transition-transform"
                  :class="{ 'rotate-180': open }" />
              </template>
            </UButton>
          </template>

          <template #item="{ item }">
            <UButton
              v-for="sub in item.children"
              :key="sub.name"
              :variant="$route.path === sub._path ? 'soft': 'ghost'"
              block
              class="justify-normal ps-10"
              :to="sub._path"
              :label="sub.title" />
          </template>
        </UAccordion>
      </aside>

      <main class="flex-1">
        <slot />
      </main>

      <aside class="sticky top-20 hidden w-96 shrink-0 xl:block" />
    </div>
  </UContainer>
</template>
