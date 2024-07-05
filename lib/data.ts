import prisma from "./prisma"
import { unstable_noStore as noStore } from "next/cache";


export const getBlog = async () => {
    noStore()
    try {
        const blogs = await prisma.blog.findMany({
            include: {
                comment: {
                    include: {
                        user: true
                    },
                    orderBy: {
                        createdAt: 'desc'
                    }
                },
                like: {
                    include: {
                        user: true
                    }
                },
                user: true,
            },
            orderBy:{
            createdAt:'desc'
            }
        })
        return blogs
    } catch (error) {
        console.log(error)
        throw new Error("failed to post")
    }
}

export const getBlogById = async (id: string) => {
    try {
        const blog = await prisma.blog.findUnique({
            where: {
                id
            },
            include:{
                user:true
            }
        })
        return blog
    } catch (error) {
        console.log(error)
    }
}