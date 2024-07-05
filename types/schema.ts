import { Blog, Comment, Like, User } from "@prisma/client";

export type CommentWihAll = Comment & { user: User }
export type LikeWithAll = Like & { user: User }

export type BlogWithAll = Blog & {
    comment: CommentWihAll[],
    like: LikeWithAll[],
    user: User
}

 