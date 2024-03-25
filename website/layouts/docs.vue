<script setup lang="ts">
const { data: docs } = await useAsyncData('docs', () => fetchContentNavigation(queryContent('docs')))

const innerDocs = computed(() => docs.value?.[0].children)

const ui = { item: { padding: '!px-0 space-y-px !py-px' } }

const symbols = '𒾙 𒾚 𒾛 𒾜 𒾝 𒾞 𒾟 𒾠 𒾡 𒾢 𒾣 𒾤 𒾥 𒾦 𒾧 𒾨 𒾩 𒾪 𒾫 𒾬 𒾭 𒾮 𒾯 𒾰 𒾱 𒾲 𒾳 𒾴 𒾵 𒾶 𒾷 𒾸 𒾹 𒾺 𒾻 𒾼 𒾽 𒾾 𒾿 𒿀 𒿁 𒿂 𒿃 𒿄 𒿅 𒿆 𒿇 𒿈'.split(' ')

</script>

<template>
  <UContainer class="mt-[--header-height]">
    <div class="mx-auto w-full items-start lg:flex">
      <aside class="sticky top-[calc(var(--header-height))] hidden h-[calc(100vh-var(--header-height))] w-72 shrink-0 border-r border-gray-200 px-3 lg:block dark:border-gray-800">
        <MotionContainer type="fade-in">
          <UAccordion class="mt-4" multiple :ui="ui" :items="innerDocs" default-open>
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

      <div class="mx-auto flex max-w-3xl border-b border-gray-200 py-3 lg:hidden dark:border-gray-800">
        <MotionContainer type="fade-in" :delay="150" class="w-full">
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
      </div>

      <MotionContainer type="fade-in" :delay="150">
        <main class="w-full flex-1">
          <slot />
        </main>
      </MotionContainer>

      <MotionContainer type="fade-in" :delay="300">
        <aside class="sticky top-[calc(var(--header-height))] hidden h-[calc(100vh-var(--header-height))] w-96 shrink-0 border-l border-gray-200 px-3 xl:block dark:border-gray-800">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas non pariatur vel doloremque enim eius! Vitae possimus maxime nisi alias incidunt consequatur doloribus aliquid illo quidem sint. Odio, labore at?
        </aside>
      </MotionContainer>
    </div>
  </UContainer>
</template>
