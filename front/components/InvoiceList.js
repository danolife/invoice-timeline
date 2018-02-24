import gql from "graphql-tag";
import { graphql } from "react-apollo";
import Invoice from "./Invoice";
import css from "./Invoice.scss";
import StatusFilter from "../components/StatusFilter";
import { Component } from "react";

class InvoiceList extends Component {
  state = {
    filter: ""
  };

  render = () => {
    const { data } = this.props;
    return (
      <div>
        <StatusFilter onChange={filter => this.setState({ filter })} />
        <div className={css.InvoiceListHeader}>
          <div className={css.cell}>Reference</div>
          <div className={css.cell}>Amount</div>
          <div className={css.cell}>Due date</div>
          <div className={css.cell}>Creation date</div>
          <div className={css.cell}>Status</div>
          <div className={css.cell}>Customer</div>
        </div>
        {data.invoices.map(invoice => (
          <Invoice
            key={invoice.reference}
            invoice={invoice}
            filter={this.state.filter}
          />
        ))}
      </div>
    );
  };
}

export const InvoiceListQuery = gql`
  query invoices {
    invoices {
      reference
      amount
      dueAt
      createdAt
      customer {
        name
      }
      currentStatus {
        status
      }
    }
  }
`;

export default graphql(InvoiceListQuery)(InvoiceList);
