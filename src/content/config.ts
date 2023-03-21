import { z, defineCollection } from 'astro:content'

const blogCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.string(),
		heroImage: z.string().optional()
	}),
})
const portfolioCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		stack: z.array(z.string()),
		github: z.string().optional(),
		website: z.string().optional(),
		image: z.string().optional(),
	}),
})

export const collections = {
	blog: blogCollection,
	portfolio: portfolioCollection,
}
