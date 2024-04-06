import { Session } from "next-auth";
import { NextRequest } from "next/server";
import { prisma } from "@/lib/database";

interface IContext {
    req: NextRequest,
    user: Session | null
}

const resolvers = {
    Query: {
        model: (parent: any, args: any, ctx: IContext, info: any) => {
            if (ctx.user === null) return []

            prisma.model.findMany({
                select: {
                    userId: ctx.user.user?.id
                }
            })
        }
    },
};

export { resolvers }