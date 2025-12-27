import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    tailwind({
      config: {
        path: './tailwind.config.cjs'
      }
    }),
    mdx()
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    }
  }
});