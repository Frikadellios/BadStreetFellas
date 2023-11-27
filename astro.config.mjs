import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import yaml from '@rollup/plugin-yaml';
import sitemap from '@astrojs/sitemap';
import cloudflare from "@astrojs/cloudflare";
import partytown from "@astrojs/partytown";
import keystatic from "@keystatic/astro";

import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  site: 'https://aquapumpers.com',
  prefetch: true,
  vite: {
    plugins: [yaml()]
  },
  integrations: [react(), keystatic(), sitemap({
    i18n: {
      defaultLocale: 'uk',
      // All urls that don't contain `es` or `fr` after `https://stargazers.club/` will be treated as default locale, i.e. `en`
      locales: {
        uk: 'uk-UA',
        // The `defaultLocale` value must present in `locales` keys
        ru: 'ru-UA',
        en: 'en-US'
      }
    }
  }), tailwind({
    applyBaseStyles: false
  }), partytown(), markdoc()],
  output: "hybrid",
  adapter: cloudflare()
});