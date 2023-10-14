import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
	site: 'https://constitution.hu',
	integrations: [mdx(),  tailwind(), react({
		experimentalReactChildren: true,
	})],
});
