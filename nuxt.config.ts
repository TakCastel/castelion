// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/google-fonts'],

  // css
  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2024-09-03',

  content: {
    experimental: {
      search: true
    },
    markdown: { 
      anchorLinks: {
        depth: 4, 
        exclude: [1, 2, 3, 4] 
      }
    }
  },

  googleFonts: {
    families: {
      'Iceberg': true,
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})