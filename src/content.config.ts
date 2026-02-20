import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/index.{md,mdx}" }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    show: z.boolean().optional(),
  }),
});

export const collections = { blog };
