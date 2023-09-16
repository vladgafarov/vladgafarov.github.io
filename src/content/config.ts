import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
   type: "content",
   schema: ({ image }) =>
      z.object({
         title: z.string(),
         description: z.string(),
         pubDate: z.date(),
         heroImage: image().optional(),
         draft: z.boolean().optional().default(false),
      }),
});
const portfolioCollection = defineCollection({
   type: "content",
   schema: ({ image }) =>
      z.object({
         title: z.string(),
         description: z.string(),
         stack: z.array(z.string()),
         github: z.string().optional(),
         website: z.string().optional(),
         image: image(),
      }),
});

export const collections = {
   blog: blogCollection,
   portfolio: portfolioCollection,
};
