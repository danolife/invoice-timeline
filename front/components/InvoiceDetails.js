import gql from "graphql-tag";
import { graphql } from "react-apollo";
import moment from "moment";
import FormattedAmount from "./FormattedAmount";
import css from "./InvoiceDetails.scss";

const InvoiceDetails = ({ data }) => {
  if (data.loading) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <h3>Details</h3>
      <div>
        <div className={css.title}>Created</div>
        <div className={css.value}>
          {moment(data.invoice.createdAt).format("YYYY-MM-DD HH:mm")}
        </div>
      </div>
      <div>
        <div className={css.title}>Reference</div>
        <div className={css.value}>{data.invoice.reference}</div>
      </div>
      <div>
        <div className={css.title}>Amount</div>
        <div className={css.value}>
          <FormattedAmount amount={data.invoice.amount} />
        </div>
      </div>
      <div>
        <div className={css.title}>Customer</div>
        <div className={css.value}>{data.invoice.customer.name}</div>
      </div>
      <div>
        <div className={css.title}>Dunning plan</div>
        <div className={css.value}>Dunning plan 1</div>
      </div>
    </div>
  );
};

export const detailsQuery = gql`
  query invoice($id: Int!) {
    invoice(id: $id) {
      reference
      createdAt
      amount
      customer {
        name
      }
    }
  }
`;

export default graphql(detailsQuery, {
  options: ({ id }) => ({ variables: { id } })
})(InvoiceDetails);
