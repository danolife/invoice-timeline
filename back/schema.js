import { makeExecutableSchema } from "graphql-tools";
import resolvers from "./resolvers";

const typeDefs = `
type Invoice {
  id: ID
  reference: String
  status: String
  dueDate: String
  creationDate: String
  amount: Int
  customer: Customer
}
type Customer {
  name: String
  picture: String
}
type Query {
  invoices: [Invoice]
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export default schema;
