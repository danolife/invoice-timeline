import css from "./Invoice.scss";
import moment from "moment";

const Invoice = ({ filter, invoice }) => {
  const dateFormat = "YYYY-MM-DD";
  const formattedAmount = (invoice.amount / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "EUR"
  });

  if (filter && filter !== invoice.currentStatus.status) {
    return "";
  }
  return (
    <div className={css.Invoice}>
      <div className={css.cell}>{invoice.reference}</div>
      <div className={css.cell}>{formattedAmount}</div>
      <div className={css.cell}>{moment(invoice.dueAt).format(dateFormat)}</div>
      <div className={css.cell}>
        {moment(invoice.createdAt).format(dateFormat)}
      </div>
      <div className={css.cell}>{invoice.currentStatus.status}</div>
      <div className={css.cell}>{invoice.customer.name}</div>
    </div>
  );
};

export default Invoice;
