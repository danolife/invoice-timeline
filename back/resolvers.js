import { Invoice } from "./database";

const resolvers = {
  Query: {
    invoices: async () => {
      const invoices = await Invoice.findAll();
      console.log(invoices);
      return invoices;
    }
  }
};

export default resolvers;
