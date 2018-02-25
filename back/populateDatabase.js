import {
  User,
  Invoice,
  Customer,
  Payment,
  Status,
  Comment,
  Reminder
} from "./database";
import { DUE, OVERDUE, PAID } from "../invoiceStatuses";
import faker from "faker";
import moment from "moment";
import { database } from "./database";

const createRandomStatus = async () => {
  const name = await faker.random.arrayElement([DUE, OVERDUE, PAID]);
  return Status.create({ name });
};

const createRandomInvoice = async () => {
  const amount = await faker.random.number();
  const reference = await faker.fake("Invoice-{{random.number(100)}}");
  const dueAt = await faker.date.future();
  const createdAt = await faker.date.past();
  return Invoice.create({
    amount,
    dueAt,
    reference,
    createdAt
  });
};

const createPayment = async invoice => {
  const invoiceCreation = moment(invoice.createdAt).format("YYYY-MM-DD");
  const now = moment().format("YYYY-MM-DD");
  const paymentDate = await faker.date.between(invoiceCreation, now);
  return Payment.create({
    amount: Math.floor(invoice.amount / 2),
    createdAt: paymentDate
  });
};

const createComment = async invoice => {
  const body = await faker.lorem.paragraph();
  const invoiceCreation = moment(invoice.createdAt).format("YYYY-MM-DD");
  const now = moment().format("YYYY-MM-DD");
  const createdAt = await faker.date.between(invoiceCreation, now);
  return Comment.create({
    body,
    createdAt
  });
};

const createReminder = async invoice => {
  const subject = await faker.lorem.words();
  const body = await faker.lorem.paragraph();
  const invoiceCreation = moment(invoice.createdAt).format("YYYY-MM-DD");
  const now = moment().format("YYYY-MM-DD");
  const createdAt = await faker.date.between(invoiceCreation, now);
  return Reminder.create({
    subject,
    body,
    createdAt
  });
};

const populate = async () => {
  await database.sync({ force: true });

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

  for (let i = 0; i < 10; i++) {
    const invoice = await createRandomInvoice();
    const customerIndex = await faker.random.number(customers.length - 1);
    await invoice.setCustomer(customers[customerIndex]);
    const status = await createRandomStatus();
    await invoice.addStatus(status);
    if (status.name === "PAID") {
      for (let i = 0; i < 2; i++) {
        const payment = await createPayment(invoice);
        await invoice.addPayment(payment);
      }
    }

    for (let i = 0; i < 3; i++) {
      const comment = await createComment(invoice);
      await comment.setCreatedBy(user);
      await invoice.addComment(comment);
    }

    for (let i = 0; i < 2; i++) {
      const reminder = await createReminder(invoice);
      await invoice.addReminder(reminder);
    }
  }

  process.exit();
};

populate();
