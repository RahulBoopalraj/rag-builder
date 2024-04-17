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
        datasource: async (parent: any, args: any, ctx: IContext, info: any) => {
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
    Mutation: {
        createDataSource: async (parent: any, args: any, ctx: IContext, info: any) => {
            if (!ctx.user || !ctx.user.user) {
                return [];
            }

            // handing the file upload present in the request in the context

            const data = await ctx.req.formData()

            const file = data.get('file') as unknown as File;

            if (!file) {
                throw new Error("No file found in request");
            }

            // TODO: write the function to handle the file uploads

            try {
                // Code for file upload goes here

                const newDataSource = await prisma.dataSource.create({
                    data: {
                        name: file.name,
                        config: {},
                        userId: ctx.user.user.id
                    }
                });

                return newDataSource;
            } catch (error) {
                console.error("Error creating data source:", error);
                throw error;
            }
        },
        createModel: async (parent: any, args: any, ctx: IContext, info: any) => {
            if (!ctx.user || !ctx.user.user) {
                return;
            }

            try {
                const newModel = await prisma.model.create({
                    data: {
                        name: args.name,
                        agentInfo: {},
                        modelSettings: {},
                        vectorDatabaseURI: "",
                        databaseConfig: {},
                        userId: ctx.user.user.id
                    }
                });

                return newModel;
            } catch (error) {
                console.error("Error creating model:", error);
                throw error;
            }
        },
        updateModel: async (parent: any, args: any, ctx: IContext, info: any) => {

            if (!ctx.user || !ctx.user.user) {
                return [];
            }

            try {
                const updatedModel = await prisma.model.update({
                    where: {
                        id: args.id,
                        userId: ctx.user.user.id
                    },
                    data: {
                        agentInfo: args.agentInfo,
                        modelSettings: args.modelSettings,
                        knowledgeBase: {
                            connect: args.knowledgeBase.map((id: string) => ({ id }))
                        },
                        vectorDatabaseURI: args.vectorDatabaseURI,
                        databaseConfig: args.databaseConfig
                    }
                });

                return updatedModel;
            } catch (error) {
                console.error("Error updating model:", error);
                throw error;
            }
        }

    }
};

export { resolvers };
