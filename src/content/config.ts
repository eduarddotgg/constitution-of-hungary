import { defineCollection, z } from 'astro:content';

const chapter = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		chapterSlug: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { chapter };
