import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";
import { PAID, DISPUTE } from "../../invoiceStatuses";
import { timelineQuery } from "./InvoiceTimeline";
import { statusQuery } from "./InvoiceStatus";

const InvoiceStatusModifier = ({ data, mutate }) => {
  const markAsPaid = () => {
    mutate({
      variables: {
        id: data.invoice.id,
        statusName: PAID
      }
    });
  };

  const startDispute = () => {
    mutate({
      variables: {
        id: data.invoice.id,
        statusName: DISPUTE
      }
    });
  };

  if (data.loading) {
    return <div>Loading</div>;
  }

  return (
    <div>
      {data.invoice.currentStatus.name !== PAID ? (
        <button onClick={markAsPaid}>Mark as paid</button>
      ) : (
        ""
      )}
      {data.invoice.currentStatus.name !== DISPUTE ? (
        <button onClick={startDispute}>Dispute</button>
      ) : (
        ""
      )}
    </div>
  );
};

export const invoiceStatusModifierQuery = gql`
  query invoice($id: Int!) {
    invoice(id: $id) {
      id
      currentStatus {
        id
        name
      }
    }
  }
`;

export const changeStatusMutation = gql`
  mutation changeInvoiceStatus($id: Int!, $statusName: StatusNames!) {
    changeInvoiceStatus(id: $id, statusName: $statusName) {
      id
    }
  }
`;

export default compose(
  graphql(invoiceStatusModifierQuery),
  graphql(changeStatusMutation, {
    options: {
      refetchQueries: ({ data: { changeInvoiceStatus: { id } } }) => {
        return [
          {
            query: timelineQuery,
            variables: {
              id
            }
          },
          {
            query: invoiceStatusModifierQuery,
            variables: {
              id
            }
          },
          {
            query: statusQuery,
            variables: {
              id
            }
          }
        ];
      }
    }
  })
)(InvoiceStatusModifier);
