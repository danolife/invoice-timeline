import { Invoice, Comment, User } from "./database";

const resolvers = {
  Query: {
    invoices: () => Invoice.findAll(),
    invoice: (r, { id }) => Invoice.findById(id)
  },
  Mutation: {
    addComment: async (r, { invoiceId, content }) => {
      const createdBy = await User.findOne();
      return Comment.create({
        body: content,
        invoiceId,
        createdById: createdBy.id
      });
    }
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
  },
  Comment: {
    createdBy: comment => comment.getCreatedBy(),
    invoice: comment => comment.getInvoice()
  }
};

export default resolvers;
