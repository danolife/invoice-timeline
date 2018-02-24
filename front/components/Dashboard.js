import css from "./Dashboard.scss";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import Invoice from "./Invoice";

const Dashboard = ({ data }) => {
  return (
    <div className={css.Dashboard}>
      <h1>InvoiceX</h1>
      {data.invoices.map(invoice => (
        <Invoice key={invoice.reference} invoice={invoice} />
      ))}
    </div>
  );
};

export const DashboardQuery = gql`
  query invoices {
    invoices {
      reference
      amount
    }
  }
`;

export default graphql(DashboardQuery)(Dashboard);
