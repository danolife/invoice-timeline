import css from "./Status.scss";
import { DUE, OVERDUE, PAID, DISPUTE } from "../../invoiceStatuses";

const Status = ({ name }) => {
  const classNames = {
    DUE: css.due,
    OVERDUE: css.overdue,
    PAID: css.paid,
    DISPUTE: css.dispute
  };
  const className = `${css.Status} ${classNames[name]}`;
  return <div className={className}>{name}</div>;
};

export default Status;
