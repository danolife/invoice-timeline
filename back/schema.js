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
  invoice: Invoice
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
  name: StatusNames
  createdAt: String
}
type User {
  id: ID
  name: String
  picture: String
}
enum StatusNames {
  DUE
  OVERDUE
  PAID
  DISPUTE
}
type Query {
  invoices: [Invoice]
  invoice(id: Int!): Invoice
}
type Mutation {
  addComment(invoiceId: Int!, content: String!): Comment
  changeInvoiceStatus(id: Int!, statusName: StatusNames!): Invoice
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export default schema;
