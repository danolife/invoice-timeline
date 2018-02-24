import { makeExecutableSchema } from "graphql-tools";
import resolvers from "./resolvers";

const typeDefs = `
type Invoice {
  id: ID
  reference: String
  dueAt: String
  createdAt: String
  amount: Int
  customer: Customer
  currentStatus: Status
  statuses: [Status]
  comments: [Comment]
  payments: [Payment]
  reminders: [Reminder]
}
type Customer {
  id: ID
  name: String
  picture: String
}
type Comment {
  id: ID
  createdAt: String
  createdBy: User
  body: String
}
type Payment {
  id: ID
  createdAt: String
  amount: Int
}
type Reminder {
  id: ID
  createdAt: String
  createdBy: User
  subject: String
  body: String
}
type Status {
  id: ID
  status: StatusEnum
  createdAt: String
}
type User {
  id: ID
  name: String
  picture: String
}
enum StatusEnum {
  DUE
  OVERDUE
  PAID
  DISPUTE
}
type Query {
  invoices: [Invoice]
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export default schema;
