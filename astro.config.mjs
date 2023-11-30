import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import yaml from '@rollup/plugin-yaml';
import sitemap from '@astrojs/sitemap';
import cloudflare from "@astrojs/cloudflare";
import partytown from "@astrojs/partytown";
import keystatic from "@keystatic/astro";
import markdoc from "@astrojs/markdoc";

import robotsTxt from "astro-robots-txt";

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
        ru: 'ru-RU',
        en: 'en-US'
      }
    }
  }), tailwind({
    applyBaseStyles: false
  }), partytown({
    config: {
      forward: ["dataLayer.push"],
      debug: false
    }
  }), markdoc(), robotsTxt({
    sitemap: 'https://www.aquapumpers.com/sitemap-0.xml',
    host: 'aquapumpers.com'
  })],
  output: "hybrid",
  adapter: cloudflare()
});