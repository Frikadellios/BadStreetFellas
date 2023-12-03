import { defineConfig, squooshImageService } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import yaml from '@rollup/plugin-yaml'
import cloudflare from '@astrojs/cloudflare'
import sitemap from '@astrojs/sitemap'
import partytown from '@astrojs/partytown'
import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
export default defineConfig({
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop',
    },
  },
  experimental: {
    contentCollectionCache: true,
  },
  site: 'https://www.aquapumpers.com',
  vite: {
    plugins: [yaml()],
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
        debug: false,
      },
    }),
    robotsTxt({
      sitemap: 'https://www.aquapumpers.com/sitemap-0.xml',
      host: 'aquapumpers.com',
    }),
  ],
  output: 'hybrid',
  adapter: cloudflare(),
})
