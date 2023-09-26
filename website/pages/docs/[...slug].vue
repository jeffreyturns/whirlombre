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
    <div class="px-4 sm:px-6 md:px-8">
        <div class="max-w-3xl mx-auto">
            <article class="text-base prose relative pt-10">
                <ContentDoc
                    :path="$route.path.slice(6)"
                    v-slot="{ doc }">
                    <article>
                        <div class="pb-8">
                            <span v-for="(it, i) in splitPath(`${doc._path}`)">
                                <span class="hover:text-accent-600">
                                    {{ it }}
                                </span>
                                {{ i != splitPath(`${doc._path}`).length - 1 ? '— ' : '' }}
                            </span>
                        </div>
                        <ContentRenderer :value="doc" />
                    </article>
                </ContentDoc>
            </article>
        </div>
    </div>
</template>
