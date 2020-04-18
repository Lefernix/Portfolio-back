import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    projects: [Project!]!
  }
  type Project {
    id: ID!
    slug: String!
    title: String!
    mockup: String!
    description: String!
    tools: String!
  }
  type Mutation {
    createProject(slug: String!, title: String!, mockup: String!, description: String!, tools: String!): Project!
  }
`;