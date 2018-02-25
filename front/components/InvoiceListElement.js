import css from "./InvoiceList.scss";
import moment from "moment";
import _ from "lodash";
import Link from "next/link";
import { Component } from "react";
import Picture from "./Picture";
import Status from "./Status";

class InvoiceListElement extends Component {
  render = () => {
    const { invoice, filter, search } = this.props;
    const dateFormat = "YYYY-MM-DD";
    const formattedAmount = (invoice.amount / 100).toLocaleString("en-US", {
      style: "currency",
      currency: "EUR"
    });
    const formattedDueDate = moment(invoice.dueAt).format(dateFormat);
    const formattedCreationDate = moment(invoice.createdAt).format(dateFormat);

    if (filter && filter !== invoice.currentStatus.name) {
      return "";
    }

    if (search) {
      const keywords = search.toLowerCase();
      const haystack = [
        invoice.reference,
        formattedAmount,
        invoice.amount,
        formattedDueDate,
        formattedCreationDate,
        invoice.currentStatus.name,
        invoice.customer.name
      ];

      let visible = false;
      _.forEach(haystack, invoiceElement => {
        if (
          invoiceElement
            .toString()
            .toLowerCase()
            .indexOf(keywords) > -1
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
          <Link href={`/invoice?id=${invoice.id}`}>
            <a>{invoice.reference}</a>
          </Link>
        </div>
        <div className={css.cell}>{formattedAmount}</div>
        <div className={css.cell}>{formattedDueDate}</div>
        <div className={css.cell}>{formattedCreationDate}</div>
        <div className={css.cell}>
          <Status name={invoice.currentStatus.name} />
        </div>
        <div className={css.cell}>
          <Picture url={invoice.customer.picture} />
          {invoice.customer.name}
        </div>
      </div>
    );
  };
}

export default InvoiceListElement;
