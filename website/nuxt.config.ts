export default defineNuxtConfig({
    ssr: true,
    devtools: { enabled: false },
    devServer: {
        port: 5000
    },
    modules: ['@unocss/nuxt', '@nuxtjs/color-mode', 'nuxt-headlessui', '@nuxt/content'],
    css: ['@unocss/reset/tailwind.css', '@/styles/base.css'],
    colorMode: {
        classSuffix: ''
    },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1'
        },
        pageTransition: { name: 'fade', mode: 'out-in' },
        layoutTransition: { name: 'fade', mode: 'out-in' }
    }
})
