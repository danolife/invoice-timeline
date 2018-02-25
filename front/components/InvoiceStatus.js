import gql from "graphql-tag";
import { graphql } from "react-apollo";
import moment from "moment";
import css from "./InvoiceStatus.scss";
import Status from "./Status";
import InvoiceStatusModifier from "./InvoiceStatusModifier";

const InvoiceStatus = ({ data }) => {
  if (data.loading) {
    return <div className={css.InvoiceStatus}>Loading</div>;
  }

  const lastPayment = [...data.invoice.payments].shift();

  return (
    <div className={css.InvoiceStatus}>
      <h3 className={css.header}>
        <div className={css.headerTitle}>Status</div>
        <Status name={data.invoice.currentStatus.name} />
        <div className={css.flexFiller} />
        <InvoiceStatusModifier id={data.invoice.id} />
      </h3>
      {data.invoice.currentStatus.name === "PAID" ? (
        <div>
          {lastPayment ? (
            <div className={css.content}>
              <div className={css.detail}>
                <div className={css.title}>Payment date</div>
                <div className={css.value}>
                  {moment(lastPayment.createdAt).format("YYYY-MM-DD")}
                </div>
              </div>
              <div className={css.detail}>
                <div className={css.title}>Payment method</div>
                <div className={css.value}>Wire transfer</div>
              </div>
              <div className={css.detail}>
                <div className={css.title}>Payment</div>
                <div className={css.value}>{lastPayment.id}</div>
              </div>
              <div className={css.detail}>
                <div className={css.title}>Wallet</div>
                <div className={css.value}>Wallet EUR</div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export const statusQuery = gql`
  query invoice($id: Int!) {
    invoice(id: $id) {
      id
      currentStatus {
        id
        name
      }
      payments {
        id
        createdAt
      }
    }
  }
`;

export default graphql(statusQuery, {
  options: ({ id }) => ({ variables: { id } })
})(InvoiceStatus);
