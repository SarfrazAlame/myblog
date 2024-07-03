'use server'
import { PostSchema } from "@/types/alltypes";
import { z } from "zod";
import { getUserId } from "./userId";
import prisma from "./prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const CreatePost = async (value: z.infer<typeof PostSchema>) => {

    const validatedPath = PostSchema.safeParse(value)
    const userId = await getUserId()

    if (!validatedPath.success) {
        return {
            message: "can't post"
        }
    }
    const { body, title, imageUrl } = validatedPath.data

    try {
        await prisma.blog.create({
            data: {
                body,
                title,
                user: {
                    connect: {
                        id: userId
                    }
                }
            }
        })

    } catch (error) {
        console.log(error)
    }

    revalidatePath('/')
    redirect('/')
}