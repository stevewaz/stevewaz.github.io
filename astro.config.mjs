import { defineConfig } from 'astro/config';

// The site works from any address: set SITE_URL (and SITE_BASE if it lives under a sub-path) when you build for a real domain.
export default defineConfig({
  site: process.env.SITE_URL || 'https://stevewaz.github.io',
  base: process.env.SITE_BASE || '/',
  trailingSlash: 'always',
});
