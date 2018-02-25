import Sequelize from "sequelize";
import { DUE, OVERDUE, PAID, DISPUTE } from "../invoiceStatuses";
require("dotenv").config();

const database = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres"
  }
);

const Invoice = database.define("invoice", {
  amount: Sequelize.INTEGER,
  dueAt: Sequelize.DATE,
  reference: Sequelize.STRING
});

const Comment = database.define("comment", {
  body: Sequelize.TEXT
});

const Customer = database.define("customer", {
  name: Sequelize.STRING,
  picture: Sequelize.STRING
});

const Payment = database.define("payment", {
  amount: Sequelize.INTEGER
});

const Reminder = database.define("reminder", {
  subject: Sequelize.STRING,
  body: Sequelize.TEXT
});

const Status = database.define("status", {
  name: {
    type: Sequelize.ENUM,
    values: [DUE, OVERDUE, PAID, DISPUTE]
  }
});

const User = database.define("user", {
  name: Sequelize.STRING,
  picture: Sequelize.STRING
});

Customer.hasMany(Invoice);
Invoice.belongsTo(Customer);

Invoice.hasMany(Status);

Invoice.hasMany(Comment);
Comment.belongsTo(Invoice);

Invoice.hasMany(Payment);
Payment.belongsTo(Invoice);

Invoice.hasMany(Reminder);
Reminder.belongsTo(Invoice);

User.hasMany(Comment, { foreignKey: "createdById" });
Comment.belongsTo(User, { as: "createdBy", foreignKey: "createdById" });

User.hasMany(Reminder, { foreignKey: "createdById" });
Reminder.belongsTo(User, { as: "createdBy", foreignKey: "createdById" });

export {
  database,
  Invoice,
  Comment,
  Customer,
  Payment,
  Reminder,
  Status,
  User
};
