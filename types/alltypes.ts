import { z } from "zod";

export const PostSchema = z.object({
    title: z.string().min(1),
    body: z.string().min(1),
    imageUrl: z.string().optional(),
});

