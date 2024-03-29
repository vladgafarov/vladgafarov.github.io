import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
   site: "https://vladgafarov.github.io/",
   integrations: [mdx(), sitemap(), tailwind(), vue()],
   markdown: {
      shikiConfig: {
         theme: "dracula",
      },
   },
});
