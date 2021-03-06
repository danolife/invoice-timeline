import gql from "graphql-tag";
import { graphql } from "react-apollo";
import InvoiceListElement from "./InvoiceListElement";
import css from "./InvoiceList.scss";
import StatusFilter from "../components/StatusFilter";
import SearchFilter from "../components/SearchFilter";
import { Component } from "react";

class InvoiceList extends Component {
  state = {
    filter: "",
    search: ""
  };

  render = () => {
    const { data } = this.props;
    if (data.loading) {
      return <div>Loading</div>;
    }
    return (
      <div>
        <StatusFilter onChange={filter => this.setState({ filter })} />
        <SearchFilter onChange={search => this.setState({ search })} />
        <div className={css.InvoiceListHeader}>
          <div className={css.cell}>Reference</div>
          <div className={css.cell}>Amount</div>
          <div className={css.cell}>Due date</div>
          <div className={css.cell}>Creation date</div>
          <div className={css.cell}>Status</div>
          <div className={css.cell}>Customer</div>
        </div>
        {data.invoices.map(invoice => (
          <InvoiceListElement
            key={invoice.reference}
            invoice={invoice}
            filter={this.state.filter}
            search={this.state.search}
          />
        ))}
      </div>
    );
  };
}

export const InvoiceListQuery = gql`
  query invoices {
    invoices {
      id
      reference
      amount
      dueAt
      createdAt
      customer {
        id
        name
        picture
      }
      currentStatus {
        id
        name
      }
    }
  }
`;

export default graphql(InvoiceListQuery)(InvoiceList);
