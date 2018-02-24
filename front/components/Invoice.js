import css from "./Invoice.scss";
import moment from "moment";
import _ from "lodash";
import Link from "next/link";

const Invoice = ({ invoice, filter, search }) => {
  const dateFormat = "YYYY-MM-DD";
  const formattedAmount = (invoice.amount / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "EUR"
  });
  const formattedDueDate = moment(invoice.dueAt).format(dateFormat);
  const formattedCreationDate = moment(invoice.createdAt).format(dateFormat);

  if (filter && filter !== invoice.currentStatus.status) {
    return "";
  }

  if (search) {
    search = search.toLowerCase();
    const haystack = [
      invoice.reference,
      formattedAmount,
      invoice.amount,
      formattedDueDate,
      formattedCreationDate,
      invoice.currentStatus.status,
      invoice.customer.name
    ];

    let visible = false;
    _.forEach(haystack, invoiceElement => {
      if (
        invoiceElement
          .toString()
          .toLowerCase()
          .indexOf(search) > -1
      ) {
        visible = true;
        // break out of the loop as soon as there is a match
        return false;
      }
    });

    if (!visible) {
      return "";
    }
  }

  return (
    <div className={css.Invoice}>
      <div className={css.cell}>
        <Link href={`/invoice-details?id=${invoice.id}`}>
          <a>{invoice.reference}</a>
        </Link>
      </div>
      <div className={css.cell}>{formattedAmount}</div>
      <div className={css.cell}>{formattedDueDate}</div>
      <div className={css.cell}>{formattedCreationDate}</div>
      <div className={css.cell}>{invoice.currentStatus.status}</div>
      <div className={css.cell}>{invoice.customer.name}</div>
    </div>
  );
};

export default Invoice;
