import { z, defineCollection } from 'astro:content'

// Typescript for the Blog Content
const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string().max(60),
      description: z.string().max(160),
      date: z.date(),
      excerpt: z.string().max(160),
      author: z.enum(['AquaPumpers']),
      categories: z.array(z.string()),
      image: image(),
      imageAlt: z.string(),
      quote: z.string(),
      category: z.string(),
    }),
})

export const collections = {
  blog: blogCollection,
}
