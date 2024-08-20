// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nitro-cloudflare-dev"],
  compatibilityDate: "2024-05-12",
  nitro: {
    preset: "cloudflare-pages"
  },
})