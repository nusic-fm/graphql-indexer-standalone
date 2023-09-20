import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mongoose from "mongoose";
import typeDefs from "./graphql/typeDefs.js";
import resolvers from "./graphql/resolvers.js";
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from "@apollo/server/plugin/landingPage/default";

const MONGODB = `mongodb+srv://${process.env.MONGODB_USR}:${process.env.MONGODB_PWD}@music-nft-indexer-mongo.epw4hdg.mongodb.net/music_nfts?retryWrites=true&w=majority`;


// Modified server startup
await mongoose.connect(MONGODB);
console.log("MongoDB connected");

// Same ApolloServer initialization as before, plus the drain plugin
// for our httpServer.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  plugins: [
    // Install a landing page plugin based on NODE_ENV
    process.env.NODE_ENV === "production"
      ? ApolloServerPluginLandingPageProductionDefault({
          graphRef: "logeshs-team-68oqfq@main",
          footer: false,
        })
      : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
  ],
});
const { url } = await startStandaloneServer(server, {
  listen: {port: 8080}
});
console.log("Server is ready at " + url);
