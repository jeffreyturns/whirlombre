<script setup lang="ts">
import DefaultLayout from '~/layouts/default.vue'
</script>

<template>
    <DefaultLayout>
        <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col mt-20">
            <div class="flex grow flex-col gap-y-5 overflow-y-auto px-6">
                <nav class="flex flex-1 flex-col">
                    <ContentNavigation v-slot="{ navigation }">
                        <ul
                            role="list"
                            class="flex flex-1 flex-col gap-y-7">
                            <li>
                                <ul
                                    role="list"
                                    class="-mx-2 space-y-1">
                                    <li
                                        v-for="item of navigation"
                                        :key="item.name">
                                        <RouterLink
                                            v-if="!item.children"
                                            :to="`/docs${item._path}`"
                                            :class="[
                                                $route.path == `/docs${item._path}`
                                                    ? 'bg-accent-100 text-surface-950'
                                                    : 'text-surface-700 hover:bg-surface-950/12',
                                                'block rounded-sm py-2 pl-2 text-sm leading-6 font-semibold'
                                            ]">
                                            {{ item.title }}
                                        </RouterLink>
                                        <HeadlessDisclosure
                                            as="div"
                                            v-else
                                            v-slot="{ open }">
                                            <HeadlessDisclosureButton
                                                :class="[
                                                    'flex items-center w-full items-center justify-center flex rounded-sm p-2 gap-x-3 text-sm leading-6 font-semibold text-surface-700'
                                                ]">
                                                <p class="w-full text-left">{{ item.title }}</p>
                                                <span
                                                    class="shrink-0"
                                                    aria-hidden="true">
                                                    <svg
                                                        v-if="open"
                                                        width="18px"
                                                        height="18px"
                                                        fill="none"
                                                        stroke-width="1.5"
                                                        viewBox="0 0 24 24">
                                                        <path
                                                            stroke="currentColor"
                                                            stroke-width="1.5"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            d="m17 4-5 5-5-5M17 20l-5-5-5 5"></path>
                                                    </svg>
                                                    <svg
                                                        v-else
                                                        width="18px"
                                                        height="18px"
                                                        fill="none"
                                                        stroke-width="1.5"
                                                        viewBox="0 0 24 24">
                                                        <path
                                                            stroke="currentColor"
                                                            stroke-width="1.5"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            d="m17 8-5-5-5 5M17 16l-5 5-5-5"></path>
                                                    </svg>
                                                </span>
                                            </HeadlessDisclosureButton>
                                            <HeadlessDisclosurePanel
                                                as="ul"
                                                class="mt-1 px-2 space-y-1">
                                                <li
                                                    v-for="sub in item.children"
                                                    :key="sub.name">
                                                    <HeadlessDisclosureButton class="w-full text-left">
                                                        <NuxtLink
                                                            :to="`/docs${sub._path}`"
                                                            :class="[
                                                                $route.path == `/docs${sub._path}`
                                                                    ? 'bg-accent-100 text-surface-950'
                                                                    : 'text-surface-700 hover:bg-surface-950/12',
                                                                'block rounded-sm py-2 pr-2 pl-6 text-sm leading-6 text-surface-700'
                                                            ]">
                                                            {{ sub.title }}
                                                        </NuxtLink>
                                                    </HeadlessDisclosureButton>
                                                </li>
                                            </HeadlessDisclosurePanel>
                                        </HeadlessDisclosure>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </ContentNavigation>
                </nav>
            </div>
        </div>

        <main class="py-10 lg:pl-72">
            <div class="px-4 sm:px-6 lg:px-8">
                <slot />
            </div>
        </main>
    </DefaultLayout>
</template>

