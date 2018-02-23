import css from "./Invoice.scss";

const Invoice = ({ invoice }) => {
  const formattedAmount = (invoice.amount / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "EUR"
  });

  return (
    <div className={css.Invoice}>
      <div className={css.cell}>{invoice.reference}</div>
      <div className={css.cell}>{formattedAmount}</div>
      <div className={css.cell}>{invoice.dueDate}</div>
      <div className={css.cell}>{invoice.creationDate}</div>
      <div className={css.cell}>{invoice.status}</div>
      <div className={css.cell}>{invoice.customer.name}</div>
    </div>
  );
};

export default Invoice;
