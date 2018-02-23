import { makeExecutableSchema } from "graphql-tools";
import resolvers from "./resolvers";

const typeDefs = `
type User {
  name: String
  profilePicture: String
  company: Company
}
type Company {
  name: String
  members: [User]
}
type Query {
  user: User
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export default schema;
