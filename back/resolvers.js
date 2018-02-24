import { Invoice } from "./database";

const resolvers = {
  Query: {
    invoices: () => Invoice.findAll()
  },
  Invoice: {
    customer: invoice => invoice.getCustomer(),
    currentStatus: async invoice => {
      const statuses = await invoice.getStatuses({
        order: [["createdAt", "DESC"]],
        limit: 1
      });
      return statuses.shift();
    },
    statuses: invoice =>
      invoice.getStatuses({
        order: [["createdAt", "DESC"]]
      })
  }
};

export default resolvers;
