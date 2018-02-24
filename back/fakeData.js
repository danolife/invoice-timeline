import { User, Invoice, Customer, Status } from "./database";
import faker from "faker";

const createRandomStatus = async () => {
  const status = await faker.random.arrayElement(["DUE", "OVERDUE", "PAID"]);
  return Status.create({ status });
};

const createRandomInvoice = async () => {
  const amount = await faker.random.number();
  const reference = await faker.fake("Invoice-{{random.number(100)}}");
  const dueAt = await faker.date.future();
  return Invoice.create({
    amount,
    dueAt,
    reference
  });
};

const populate = async () => {
  // Users
  const user = await User.create({
    name: "Bertrand Giraux",
    picture: "https://api.adorable.io/avatars/1"
  });

  // Customers
  const sonos = await Customer.create({
    name: "Sonos",
    picture: "https://logo.clearbit.com/sonos.com"
  });
  const airbnb = await Customer.create({
    name: "Airbnb",
    picture: "https://logo.clearbit.com/airbnb.com"
  });
  const thepricehub = await Customer.create({
    name: "The Price Hub",
    picture: "https://logo.clearbit.com/thepricehub.com"
  });
  const customers = [sonos, airbnb, thepricehub];

  let i;
  for (i = 0; i < 5; i++) {
    const invoice = await createRandomInvoice();
    const customerIndex = await faker.random.number(customers.length - 1);
    await invoice.setCustomer(customers[customerIndex]);
    const status = await createRandomStatus();
    await invoice.addStatus(status);
  }
};

export default { populate };
