import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import fuse from 'astro-fuse'

export default defineConfig({
  site: 'https://constitution.hu',
  integrations: [
    mdx(),
    tailwind(),
    react({
      experimentalReactChildren: true,
    }),
    fuse({
      keys: ['content', 'frontmatter.title', 'formmatter.description', 'frontmatter.slug'],
    })],
});
