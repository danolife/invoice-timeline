import { Invoice } from "./database";

const resolvers = {
  Query: {
    invoices: () => Invoice.findAll(),
    invoice: (r, { id }) => Invoice.findById(id)
  },
  Invoice: {
    comments: invoice => invoice.getComments(),
    customer: invoice => invoice.getCustomer(),
    currentStatus: async invoice => {
      const statuses = await invoice.getStatuses({
        order: [["createdAt", "DESC"]],
        limit: 1
      });
      return statuses.shift();
    },
    payments: invoice =>
      invoice.getPayments({
        order: [["createdAt", "DESC"]]
      }),
    reminders: invoice => invoice.getReminders(),
    statuses: invoice =>
      invoice.getStatuses({
        order: [["createdAt", "DESC"]]
      })
  }
};

export default resolvers;
