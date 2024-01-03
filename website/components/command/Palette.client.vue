<script lang="ts" setup>
import type { CommandItem } from '~/types/command'

const { data: globalNavigation } = await useAsyncData('global', () => fetchContentNavigation(queryContent('docs')))

const data = ref<CommandItem[]>([])

watchEffect(() => {
  if (globalNavigation.value) {
    data.value = navItemToCommandItemMapper(globalNavigation.value)
    data.value.push({
      name: 'Other',
      url: '',
      data: [
        {
          name: 'Pages',
          url: '/',
          data: [
            {
              name: 'Documentation',
              url: '/docs'
            },
            {
              name: 'Palette Generator',
              url: '/generator'
            },
            {
              name: 'Site Color',
              url: '/theme'
            },
            {
              name: 'Blog',
              url: '/blog'
            }
          ]
        }
      ]
    })
  }
})

const search = useSearch()
const router = useRouter()

const query = useQuery()

const filteredData = computed(() => {
  if (query.value === '') {
    return data.value
  }

  return filterItemsByQuery(data.value, query.value)
})

const onSelect = (it: CommandItem) => {
  router.push(it.url)
  search.value = false
}

const handleKeyDown = (event: KeyboardEvent) => {
  if ((event.ctrlKey || event.metaKey) && (event.key === '/' || event.key === 'k')) {
    search.value = !search.value
  }
}

const handleExit = (event: KeyboardEvent) => {
  if (event.code === 'Escape') {
    search.value = false
  }
}

onMounted(() => {
  window.addEventListener('keydown', (e: KeyboardEvent) => {
    handleKeyDown(e)
    handleExit(e)
  })
})
</script>

<template>
  <HeadlessTransitionRoot
    :show="search"
    as="template"
    appear
    @after-leave="query = ''">
    <HeadlessDialog
      as="div"
      class="relative z-10"
      @close="search = false">
      <HeadlessTransitionChild
        as="template"
        enter="timing-out-glide-medium"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="timing-out-glide-short"
        leave-from="opacity-100"
        leave-to="opacity-0">
        <div class="fixed inset-0 bg-surface-500 bg-opacity-75 transition-wl-opacity duration-medium" />
      </HeadlessTransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto p-4 md:p-20 sm:p-6">
        <HeadlessTransitionChild
          as="template"
          enter="timing-out-glide-medium"
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to="opacity-100 translate-y-0 sm:scale-100"
          leave="timing-out-glide-short"
          leave-from="opacity-100 translate-y-0 sm:scale-100"
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <HeadlessDialogPanel
            class="mx-auto max-w-xl transform rounded-wl-small bg-surface-10 shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
            <div class="h-full w-full rounded-wl-small bg-surface-100 p-4">
              <HeadlessCombobox @update:model-value="onSelect">
                <HeadlessComboboxInput
                  class="block w-full border border-surface-200 rounded-wl-small bg-surface-50 p-2.5 text-base text-surface-900 outline-none focus:border-accent-500 placeholder:text-surface-500 focus:outline-none focus:ring-accent-500"
                  placeholder="Search..."
                  @change="query = $event.target.value" />

                <HeadlessComboboxOptions
                  v-if="filteredData.length > 0"
                  static
                  class="my-2 max-h-72 scroll-py-2 overflow-y-auto text-base text-surface-800 [&::-webkit-scrollbar]:w-2.5 lg:max-h-96 [&::-webkit-scrollbar-track]:!bg-surface-50">
                  <template v-for="it in filteredData" :key="`header-${i}`">
                    <template v-if="it.data">
                      <div v-for="(nestedItem, ni) in it.data" :key="`nested-${ni}`">
                        <div
                          :class="['px-2 py-2 cursor-default font-headline text-sm']">
                          {{ nestedItem.name }}
                        </div>

                        <template v-if="nestedItem.data">
                          <div v-for="(deepItem, di) in nestedItem.data" :key="`deep-${di}`">
                            <HeadlessComboboxOption v-slot="{ active }" :value="deepItem">
                              <li
                                :class="['cursor-default text-sm select-none rounded-wl-small px-4 py-2 transition-wl-colors', active && 'bg-surface-200 text-surface-950']"
                                @click="onSelect(deepItem)">
                                {{ deepItem.name }}
                                <!-- : <span class="opacity-65">{{ deepItem.desc }}</span> -->
                              </li>
                            </HeadlessComboboxOption>
                          </div>
                        </template>

                        <!-- @vue-ignore -->
                        <div v-if="ni === (nestedItem.data?.length - 1)" class="h-px bg-surface-200" />
                      </div>
                    </template>
                  </template>
                </HeadlessComboboxOptions>

                <CommandNoData v-if="query !== '' && filteredData.length === 0" />
                <CommandFooter />
              </HeadlessCombobox>
            </div>
          </HeadlessDialogPanel>
        </HeadlessTransitionChild>
      </div>
    </HeadlessDialog>
  </HeadlessTransitionRoot>
</template>
