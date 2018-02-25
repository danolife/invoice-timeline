import gql from "graphql-tag";
import { graphql } from "react-apollo";
import moment from "moment";
import FormattedAmount from "./FormattedAmount";
import css from "./InvoiceDetails.scss";
import Picture from "./Picture";

const InvoiceDetails = ({ data }) => {
  if (data.loading) {
    return <div className={css.InvoiceDetails}>Loading</div>;
  }

  return (
    <div className={css.InvoiceDetails}>
      <h3>Details</h3>
      <div className={css.content}>
        <div className={css.detail}>
          <div className={css.title}>Reference</div>
          <div className={css.value}>{data.invoice.reference}</div>
        </div>
        <div className={css.detail}>
          <div className={css.title}>Created</div>
          <div className={css.value}>
            {moment(data.invoice.createdAt).format("YYYY-MM-DD HH:mm")}
          </div>
        </div>
        <div className={css.detail}>
          <div className={css.title}>Amount</div>
          <div className={css.value}>
            <FormattedAmount amount={data.invoice.amount} />
          </div>
        </div>
        <div className={css.detail}>
          <div className={css.title}>Customer</div>
          <div className={css.value}>
            <Picture url={data.invoice.customer.picture} />
            {data.invoice.customer.name}
          </div>
        </div>
        <div className={css.detail}>
          <div className={css.title}>Dunning plan</div>
          <div className={css.value}>Dunning plan 1</div>
        </div>
      </div>
    </div>
  );
};

export const detailsQuery = gql`
  query invoice($id: Int!) {
    invoice(id: $id) {
      id
      reference
      createdAt
      amount
      customer {
        id
        name
        picture
      }
    }
  }
`;

export default graphql(detailsQuery, {
  options: ({ id }) => ({ variables: { id } })
})(InvoiceDetails);
