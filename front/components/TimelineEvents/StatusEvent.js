import moment from "moment";
import Event from "./Event";

const StatusEvent = ({ event }) => {
  const status = event;
  return (
    <Event
      icon="tags"
      date={moment(status.createdAt).format("YYYY-MM-DD [at] HH:mm")}
      title={`Invoice was marked as ${status.name}`}
    />
  );
};

export default StatusEvent;
