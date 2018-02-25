import gql from "graphql-tag";
import { graphql } from "react-apollo";
import moment from "moment";
import css from "./InvoiceStatus.scss";

const InvoiceStatus = ({ data }) => {
  if (data.loading) {
    return <div>Loading</div>;
  }

  const lastPayment = [...data.invoice.payments].shift();

  return (
    <div>
      <div>{data.invoice.currentStatus.name}</div>
      {data.invoice.currentStatus.name === "PAID" ? (
        <div>
          <div>
            <div className={css.title}>Payment date</div>
            <div className={css.value}>
              {moment(lastPayment.createdAt).format("YYYY-MM-DD")}
            </div>
          </div>
          <div>
            <div className={css.title}>Payment method</div>
            <div className={css.value}>Wire transfer</div>
          </div>
          <div>
            <div className={css.title}>Payment</div>
            <div className={css.value}>{lastPayment.id}</div>
          </div>
          <div>
            <div className={css.title}>Wallet</div>
            <div className={css.value}>Wallet EUR</div>
          </div>
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
