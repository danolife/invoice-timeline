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
      <div className={css.cell}>{invoice.dueAt}</div>
      <div className={css.cell}>{invoice.createdAt}</div>
      <div className={css.cell}>{invoice.currentStatus.status}</div>
      <div className={css.cell}>{invoice.customer.name}</div>
    </div>
  );
};

export default Invoice;
