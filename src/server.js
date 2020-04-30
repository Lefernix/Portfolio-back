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
  // app.use('/send', require('./mail'))

  app.listen({ port: 8001 }, () => {
    console.log(
      `🚀 Server ready at http://localhost:8001${server.graphqlPath}`
    );
    connectDb().then(() => {
      console.log("MongoDb connected");
    });
  });
};

startServer();
