require("dotenv").config();
import { ApolloServer } from "apollo-server-lambda";
import express from "express";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

const cors = require("cors");

const { connectDb } = require("../config/config.js");


const startServer = async () => {
  const app = express();
  const router = express.Router()
  app.use(cors());

  const server = new ApolloServer({ typeDefs, resolvers });

  // server.applyMiddleware({ app });
  
  app.use(`/.netlify/functions/graphql`, router);

  const port = process.env.PORT || 8001;

  app.listen(port, () => {
    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    );
    connectDb().then(() => {
      console.log("MongoDb connected");
    });
  });
};

startServer();
