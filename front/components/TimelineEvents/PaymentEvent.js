import moment from "moment";
import Event from "./Event";
import FormattedAmount from "../FormattedAmount";

const PaymentEvent = ({ event }) => {
  const payment = event;
  return (
    <Event
      icon="credit-card"
      date={moment(payment.createdAt).format("YYYY-MM-DD [at] HH:mm")}
      title="A new payment was received"
    >
      Amount: <FormattedAmount amount={payment.amount} />
    </Event>
  );
};

export default PaymentEvent;
