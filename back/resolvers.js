import invoices from "./fakeData";

const resolvers = {
  Query: {
    invoices: () => {
      return invoices;
    }
  }
};

export default resolvers;
