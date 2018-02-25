import gql from "graphql-tag";
import { graphql } from "react-apollo";
import _ from "lodash";
import moment from "moment";

const InvoiceTimeline = ({ data: { loading, invoice } }) => {
  if (loading) {
    return <div>Loading</div>;
  }
  let events = [
    ...invoice.comments,
    ...invoice.reminders,
    ...invoice.payments,
    ...invoice.statuses
  ];
  events = _.orderBy(events, event => moment(event.createdAt), "desc");
  return (
    <div>
      {events.map(event => (
        <div key={event.__typename + event.id}>
          {event.__typename}{" "}
          {moment(event.createdAt).format("YYYY-MM-DD [at] HH:mm")}
        </div>
      ))}
    </div>
  );
};

export const timelineQuery = gql`
  query invoice($id: Int!) {
    invoice(id: $id) {
      id
      comments {
        id
        body
        createdAt
      }
      reminders {
        id
        subject
        body
        createdAt
      }
      payments {
        id
        amount
        createdAt
      }
      statuses {
        id
        name
        createdAt
      }
    }
  }
`;

export default graphql(timelineQuery, {
  options: ({ id }) => ({ variables: { id } })
})(InvoiceTimeline);
