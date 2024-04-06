import { Session } from "next-auth";
import { NextRequest } from "next/server";
import { prisma } from "@/lib/database";

interface IContext {
    req: NextRequest,
    user: Session | null
}
const resolvers = {
    Query: {
        model: async (parent: any, args: any, ctx: IContext, info: any) => {
            if (!ctx.user || !ctx.user.user) {
                return [];
            }

            try {
                const models = await prisma.model.findMany({
                    where: {
                        userId: ctx.user.user.id
                    },
                });

                return models;
            } catch (error) {
                console.error("Error fetching models:", error);
                throw error;
            }
        },
        datasource: async (parent: any, args: any, ctx: IContext, info: any) {
            if (!ctx.user || !ctx.user.user) {
                return [];
            }

            try {
                const models = await prisma.dataSource.findMany({
                    where: {
                        userId: ctx.user.user.id
                    },
                });

                return models;
            } catch (error) {
                console.error("Error fetching models:", error);
                throw error;
            }
        }
    },
};

export { resolvers };
