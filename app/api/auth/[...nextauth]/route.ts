import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
    providers: [
        EmailProvider({
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM,
        }),
        GoogleProvider({
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            clientId: process.env.GOOGLE_CLIENT_ID!,
        })
    ],
    session: {
        strategy: "jwt",
    }
})

export { handler as GET, handler as POST }