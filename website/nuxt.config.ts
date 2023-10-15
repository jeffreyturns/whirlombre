export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  devServer: { port: 5000 },
  modules: ['@unocss/nuxt', '@nuxtjs/color-mode', 'nuxt-headlessui', '@nuxt/content'],
  css: ['@unocss/reset/tailwind.css', '@/styles/base.css'],
  colorMode: { classSuffix: '' },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200' }
      ],
      htmlAttrs: { lang: 'en' }
    },
    pageTransition: { name: 'fade', mode: 'out-in' },
    layoutTransition: { name: 'fade', mode: 'out-in' }
  },
  runtimeConfig: { public: { baseURL: process.env.BASE_URL || 'https://example.com' } }
})
