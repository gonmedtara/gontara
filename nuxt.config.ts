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
    "@vite-pwa/nuxt",
  ],

  ssr: true,

  css: ["~/styles/index.scss", "primeicons/primeicons.css"],

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "en",
      },
      title: "Gontara",
      meta: [
        {
          name: "ogTitle",
          content: "Gontara | Mohamed GONTARA private blog",
        },
        {
          name: "description",
          content: "Mohamed GONTARA private blog",
        },
        { name: "robots", content: "index, follow" },
        { name: "canonical", content: "https://www.gontara.dev" },

        {
          name: "og:title",
          content: "Gontara | Mohamed GONTARA private blog",
        },
        {
          name: "og:description",
          content: "Mohamed GONTARA private blog",
        },
        { name: "og:image", content: "/img/home.png" },
        { name: "og:url", content: "https://www.gontara.dev" },

        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Gontara | Mohamed GONTARA private blog",
        },
        {
          name: "twitter:description",
          content: "Gontara | Mohamed GONTARA private blog",
        },
        { name: "twitter:image", content: "/img/home.png" },
      ],
    },
  },

  site: {
    url: "https://www.gontara.dev",
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

  pwa: {
    meta: {
      title: "Gontara | Mohamed GONTARA private blog",
    },
    registerType: "autoUpdate",
    manifest: {
      name: "Gontara",
      short_name: "Gontara",
      description: "Mohamed GONTARA private frontend blog",
      theme_color: "#4ade80",
      lang: "en",
      background_color: "#FFF",
      orientation: "any",
      display: "standalone",
      scope: "/",
      start_url: "/",
      icons: [
        {
          purpose: "maskable",
          sizes: "512x512",
          src: "/pwa/icon512_maskable.png",
          type: "image/png",
        },
        {
          purpose: "any",
          sizes: "512x512",
          src: "/pwa/icon512_rounded.png",
          type: "image/png",
        },
      ],
      screenshots: [
        {
          src: "/img/home.png",
          sizes: "1078x804",
          form_factor: "wide",
          type: "image/png",
          label: "Gontara | Mohamed GONTARA private blog",
        },
      ],
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
      },
      client: {
        installPrompt: true,
        periodicSyncForUpdates: 20,
      },
    },
  },
});
