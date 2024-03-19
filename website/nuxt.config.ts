import { getIconCollections } from '@egoist/tailwindcss-icons'

export default defineNuxtConfig({
  devServer: { port: 5000 },
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    'nuxt-og-image'
  ],
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
      'Noto Sans Cypro Minoan': 400
    }
  },
  app: { head: { htmlAttrs: { class: 'ui-scrollbars' } } },
  css: ['~/styles/base.css']
})
