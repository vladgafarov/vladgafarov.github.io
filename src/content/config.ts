import { z, defineCollection } from 'astro:content'

const blogCollection = defineCollection({})
const portfolioCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		stack: z.array(z.string()),
		github: z.string().optional(),
		website: z.string().optional(),
	}),
})

export const collections = {
	blog: blogCollection,
	portfolio: portfolioCollection,
}
