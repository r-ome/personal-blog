import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import mermaid from "astro-mermaid";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "static",
  site: "https://www.jeromeagapay.com",
  integrations: [mdx(), sitemap(), mermaid({ theme: "dark", autoTheme: true })],
  vite: {
    plugins: [tailwindcss()],
  },
});
