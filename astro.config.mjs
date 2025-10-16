import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://miskoune.com',

  vite: {
    plugins: [tailwindcss()]
  }
});