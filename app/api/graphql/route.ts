import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { serverAuth } from "@/lib/serverAuth";
import { typeDefs } from "@/graphql/typedef";
import { resolvers } from "@/graphql/resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});



const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async req => ({ req: req, user: await serverAuth() }),
});

export { handler as GET, handler as POST }