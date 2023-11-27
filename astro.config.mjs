import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import yaml from '@rollup/plugin-yaml';
import sitemap from '@astrojs/sitemap';
import cloudflare from "@astrojs/cloudflare";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://aquapumpers.com',
  prefetch: true,
  vite: {
    plugins: [yaml()]
  },
  integrations: [react(), sitemap({
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
  }), partytown()],
  output: "server",
  adapter: cloudflare()
});