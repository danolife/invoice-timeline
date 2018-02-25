import moment from "moment";

const PaymentEvent = ({ event }) => (
  <div>
    {event.__typename} {moment(event.createdAt).format("YYYY-MM-DD [at] HH:mm")}
  </div>
);

export default PaymentEvent;
