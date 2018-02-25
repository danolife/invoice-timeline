import gql from "graphql-tag";
import { graphql } from "react-apollo";
import _ from "lodash";
import moment from "moment";
import StatusEvent from "./TimelineEvents/StatusEvent";
import ReminderEvent from "./TimelineEvents/ReminderEvent";
import CommentEvent from "./TimelineEvents/CommentEvent";
import PaymentEvent from "./TimelineEvents/PaymentEvent";
import css from "./InvoiceTimeline.scss";

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

  // Reference each component in order to use them dynamically below
  const eventComponents = {
    StatusEvent,
    ReminderEvent,
    CommentEvent,
    PaymentEvent
  };

  return (
    <div className={css.InvoiceTimeline}>
      {events.map(event => {
        const CustomEventTag = eventComponents[`${event.__typename}Event`];
        return (
          <CustomEventTag key={event.__typename + event.id} event={event} />
        );
      })}
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
        createdBy {
          id
          name
        }
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
