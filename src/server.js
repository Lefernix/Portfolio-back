require("dotenv").config();
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

const cors = require("cors");

const { connectDb } = require("../config/config.js");


const startServer = async () => {
  const app = express();
  app.use(cors());

  const server = new ApolloServer({ typeDefs, resolvers });

  server.applyMiddleware({ app });

  const port = process.env.PORT || 4000;

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
