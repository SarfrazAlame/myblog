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
                imageUrl,
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


export const DeleteBlog = async (id: string) => {
    try {
        await prisma.blog.delete({
            where: {
                id
            }
        })
        revalidatePath("/")
        redirect('/')
    } catch (error) {
        console.log(error)
    }
}

export const LikePost = async (id: string, userId:string) => {

    try {
        await prisma.like.create({
            data: {
                postId: id,
                userId
            }
        })
        revalidatePath('/article')
    } catch (error) {
        console.log(error)
    }
}

export const fetchLike = async (id: string,userId:string) => {
    try {
        const like = await prisma.like.findFirst({
            where: {
                postId: id,
                userId,
            }
        })
        return like
    } catch (error) {
        console.log(error)
    }
}

export const CommentBlog = async(id:string, userId:string, response:string)=>{
    try {
        await prisma.comment.create({
            data:{
                blogId:id,
                userId,
                response
            }
        })
        revalidatePath('/article')
    } catch (error) {
        console.log(error)
    }
}