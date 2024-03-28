import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import type { Adapter } from "next-auth/adapters";
import { prisma } from "@/lib/database"

const handler = NextAuth({
    adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
        EmailProvider({
            type: "email",
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: Number(process.env.EMAIL_SERVER_PORT),
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD
                }
            },
            from: process.env.EMAIL_FROM,
        }),
        GoogleProvider({
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            clientId: process.env.GOOGLE_CLIENT_ID!,
        })
    ],
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: '/auth/login',
        signOut: '/auth/signout',
        error: '/auth/error',
        verifyRequest: '/auth/verify-request',
        newUser: '/auth/login'
    }
})

export { handler as GET, handler as POST }