import css from "./Dashboard.scss";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const Dashboard = ({ loading, data }) => {
  return (
    <div className={css.Dashboard}>
      Invoices:
      {data.invoices.map(invoice => (
        <div>
          {invoice.reference} / {invoice.amount}€
        </div>
      ))}
    </div>
  );
};

export const DashboardQuery = gql`
  query invoices {
    invoices {
      reference
      status
      dueDate
      creationDate
      amount
    }
  }
`;

export default graphql(DashboardQuery)(Dashboard);
