require("dotenv").config();
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";
import graphqlHTTP from "express-graphql";

const expressPlayground = require('graphql-playground-middleware-express').default

const cors = require("cors");

const { connectDb } = require("../config/config.js");


const startServer = async () => {
  const app = express();
  app.use(cors());

  const server = new ApolloServer({ typeDefs, resolvers });

  server.applyMiddleware({ app });

  app.use('/graphql', graphqlHTTP(server))

  app.get("/playground", expressPlayground({ endpoint: "/graphql" }));

  const port = process.env.PORT || 8080;

  app.listen({ port }, () => {
    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    );
    connectDb().then(() => {
      console.log("MongoDb connected");
    });
  });
};

startServer();
