import { User, Invoice } from "./database";

const populate = async () => {
  const user = await User.create({
    name: "Bertrand Giraux",
    picture: "https://api.adorable.io/avatars/1"
  });

  const Invoice1 = await Invoice.create({
    amount: 100,
    dueAt: "2018-03-01",
    reference: "Invoice-1"
  });
  const Invoice2 = await Invoice.create({
    amount: 1000,
    dueAt: "2018-04-01",
    reference: "Invoice-2"
  });
};

export default { populate };
