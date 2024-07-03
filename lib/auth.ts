import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import prisma from "./prisma";
import GoogleProvider from "next-auth/providers/google"

export const authOptions: NextAuthOptions = ({
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_ID!
        })
    ]
})