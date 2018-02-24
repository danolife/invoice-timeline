import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import schema from "./schema";
import cors from "cors";
import { database } from "./database";

const start = async () => {
  await database.sync({ force: true });
  const app = express();
  app.use(cors());
  app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));
  app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

  app.listen(4000, () =>
    console.log("Go to http://localhost:4000/graphiql to run queries!")
  );
};

start();
