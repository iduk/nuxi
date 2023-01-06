// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/main.scss" as *;',
        },
      },
    },
  },
  modules: ["nuxt-svgo", ['nuxt-swiper', {
    // Swiper options
    prefix: 'Swiper',
    styleLang: 'css',
    modules: ['navigation', 'pagination']
  }]],
})
