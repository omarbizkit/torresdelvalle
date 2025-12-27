import { defineCollection, z } from 'astro:content';

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
  }),
});

const journalCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string(),
    image: z.string(),
    excerpt: z.string(),
    category: z.string(),
  }),
});

export const collections = {
  'pages': pagesCollection,
  'journal': journalCollection,
};
