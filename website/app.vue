<!-- eslint-disable @stylistic/max-len -->
<script lang="ts" setup>

useHead({
  titleTemplate: (title) => {
    return title ? `${title} — Whirlombre` : 'Whirlombre'
  },
  title: 'Whirlombre: Super-Minimalist Library for Smooth Shade Generation'
})

const config = useRuntimeConfig()

useSeoMeta({
  ogTitle: 'Whirlombre: Super-Minimalist Library for Smooth Shade Generation',
  author: '@jeffreyturns',
  robots: 'index, follow',
  keywords: 'Whirlombre, shade library, shade generation, design, smooth shades, design tool',
  description: 'Whirlombre is a lightweight tool and library designed to simplify and enhance the shading process in various design projects. Generate smooth shades effortlessly and quickly!',
  ogDescription: 'Whirlombre is a lightweight tool and library designed to simplify and enhance the shading process in various design projects. Generate smooth shades effortlessly and quickly!',
  ogImage: config.public.baseURL + '/og_image.png',
  ogType: 'website',
  // Twitter
  twitterCard: 'summary_large_image',
  twitterSite: '@whirlombre',
  twitterTitle: 'Whirlombre: Super-Minimalist Library for Smooth Shade Generation',
  twitterDescription: 'Whirlombre is a lightweight tool and library designed to simplify and enhance the shading process in various design projects. Generate smooth shades effortlessly and quickly!',
  twitterImage: config.public.baseURL + '/og_image.png'
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  @apply transition-[opacity] timing-out-glide-medium;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}
</style>
