import { getIconCollections } from '@egoist/tailwindcss-icons'

export default defineNuxtConfig({
  devServer: { port: 5000 },
  devtools: { enabled: false },
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    'nuxt-og-image',
    '@pinia/nuxt'
  ],
  pinia: { storesDirs: ['./stores/**', './custom-folder/stores/**'] },
  hooks: {
    'components:extend': (components) => {
      const globals = components.filter(c => ['UButton', 'UIcon', 'UAlert'].includes(c.pascalName))

      // eslint-disable-next-line no-return-assign
      globals.forEach(c => c.global = true)
    }
  },
  ui: {
    icons: {
      extraProperties: {
        height: '24px',
        width: '24px'
      },
      ...getIconCollections(['material-symbols'])
    }
  },
  googleFonts: {
    families: {
      'Inclusive Sans': 400,
      'Dela Gothic One': 400,
      'Noto Sans Cypro Minoan': 400,
      'IBM Plex Mono': 400
    }
  },
  app: {
    head: { htmlAttrs: { class: 'ui-scrollbars' } },
    pageTransition: { name: 'fade', mode: 'out-in' }
  },
  css: ['~/styles/base.css']
})
