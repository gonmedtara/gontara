// https://nuxt.com/docs/api/configuration/nuxt-config
import AuraCustomTheme from "./primetheme";

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@primevue/nuxt-module",
    "@nuxt/image",
    "@nuxtjs/google-fonts",
    "@nuxtjs/sitemap",
  ],

  ssr: true,

  css: ["~/styles/index.scss", "primeicons/primeicons.css"],

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },

  site: {
    url: "https://gontara.com",
  },

  routeRules: {
    "/": { prerender: true },
  },

  colorMode: {
    preference: "light", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storageKey: "nuxt-color-mode",
  },

  primevue: {
    components: {
      include: [
        "Button",
        "Divider",
        "InputText",
        "Panel",
        "Avatar",
        "AutoComplete",
      ],
    },
    options: {
      theme: AuraCustomTheme,
    },
  },

  content: {
    highlight: {
      theme: "slack-dark",
      langs: ["dart", "typescript", "html", "vue", "sass", "javascript", "jsx"],
    },
    experimental: {
      search: true,
    },
  },

  googleFonts: {
    display: "swap",
    families: {
      Inter: [400, 500, 600, 700, 800, 900],
    },
  },

  compatibilityDate: "2024-07-04",
});
