import gql from "graphql-tag";

const typeDefs = gql`

type User {
  id: ID
  name: String
  email: String
  accounts: [Account]
  sessions: [Session]
  dataSources: [DataSource]
  models: [Model]
}

type Account {
  id: ID
    type: String
    provider: String
    providerAccountId: String
    refresh_token: String
    access_token: String
    expires_at: Int
    token_type: String
    scope: String
    id_token: String
    session_state: String
    user: User
  }
  
  type Session {
    id: ID
    sessionToken: String
    userId: ID
    expires: String
    user: User
  }
  
  type DataSource {
    id: ID
    name: String
    type: String
    config: JSON
    modelId: ID
    userId: ID
    user: User
    model: Model
  }
  
  type Model {
    id: ID
    name: String
    agentInfo: JSON
    modelSettings: JSON
    knowledgeBase: [DataSource]
    vectorDatabaseURI: String
    databaseConfig: JSON
    userId: ID
    user: User
  }

  type Query {
    model: [Model]
    datasource: [DataSource]
  }
`;

export { typeDefs }