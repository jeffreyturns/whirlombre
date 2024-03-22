<script setup lang="ts">
const { data: docs } = await useAsyncData('docs', () => fetchContentNavigation(queryContent('docs')))

const innerDocs = computed(() => docs.value?.[0].children)

const ui = { item: { padding: '!px-0 space-y-px !py-px' } }

const symbols = '𒾙 𒾚 𒾛 𒾜 𒾝 𒾞 𒾟 𒾠 𒾡 𒾢 𒾣 𒾤 𒾥 𒾦 𒾧 𒾨 𒾩 𒾪 𒾫 𒾬 𒾭 𒾮 𒾯 𒾰 𒾱 𒾲 𒾳 𒾴 𒾵 𒾶 𒾷 𒾸 𒾹 𒾺 𒾻 𒾼 𒾽 𒾾 𒾿 𒿀 𒿁 𒿂 𒿃 𒿄 𒿅 𒿆 𒿇 𒿈'.split(' ')
</script>

<template>
  <UContainer class="mt-20">
    <div class="mx-auto w-full items-start lg:flex">
      <aside class="sticky top-20 hidden h-[calc(100vh-70px)] w-72 shrink-0 lg:block">
        <MotionContainer type="fade-in">
          <UAccordion multiple :ui="ui" :items="innerDocs" default-open>
            <template #default="{ item, index, open }">
              <UButton class="my-px" variant="ghost">
                <span class="bg-primary-100 dark:bg-primary-600 flex size-4 items-center justify-center">
                  <span class="font-minoan text-gray-900 dark:text-gray-100">
                    {{ symbols.at(index) }}
                  </span>
                </span>
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
                :variant="$route.path === sub._path ? 'solid': 'ghost'"
                block
                class="justify-normal ps-10"
                :to="sub._path"
                :label="sub.title" />
            </template>
          </UAccordion>
        </MotionContainer>
      </aside>

      <MotionContainer type="fade-in" :delay="150">
        <main class="w-full flex-1">
          <slot />
        </main>
      </MotionContainer>

      <!-- <aside class="sticky top-20 hidden w-96 shrink-0 xl:block" /> -->
    </div>
  </UContainer>
</template>
