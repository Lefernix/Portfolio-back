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
    toolsFront: String
    toolsBack: String
    architecture: String
    url: String!
  }
  type Mutation {
    createProject(slug: String!, title: String!, mockup: String!, description: String!, toolsFront: String, toolsBack: String, architecture: String, url: String!): Project!
  }
`;