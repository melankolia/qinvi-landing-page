// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "vite-plugin-vue-type-imports/nuxt",
    "@nuxt/image-edge",
  ],
  nitro: {
    compressPublicAssets: true,
  },
  css: ["assets/index.css"],
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Make Your Wedding Invitations Timeless and a Modern Twist with Qinvi.id",
        },
      ],
      title: "Qinvi",
      charset: "utf-8",
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap",
        },
      ],
    },
  },
  tailwindcss: {
    configPath: "tailwind.config",
  },
});
