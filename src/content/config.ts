import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    publishDate: z.string(),
    category: z.string(),
    readingTime: z.number().optional(),
    pubDatetime: z.string(),
    title: z.string(),
    ogImage: z.string().optional(),
    description: z.string(),
    modDatetime: z.string(),
    tags: z.array(z.string()).default([]),

  },
});

export const collections = { articles };
