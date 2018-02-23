const customer = {
  name: "Sonos",
  picture: "https://logo.clearbit.com/sonos.com"
};

const invoices = [
  {
    reference: "Invoice-1",
    status: "Due",
    dueDate: "2018-03-01",
    creationDate: "2018-01-01",
    amount: 133700,
    customer
  },
  {
    reference: "Invoice-2",
    status: "Due",
    dueDate: "2018-03-04",
    creationDate: "2018-02-01",
    amount: 10500,
    customer
  },
  {
    reference: "Invoice-3",
    status: "Overdue",
    dueDate: "2018-01-01",
    creationDate: "2017-11-12",
    amount: 40200,
    customer
  }
];

export default invoices;
