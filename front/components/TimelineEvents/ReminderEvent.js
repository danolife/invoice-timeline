import moment from "moment";
import Event from "./Event";

const ReminderEvent = ({ event }) => {
  const reminder = event;
  return (
    <Event
      icon="bell"
      date={moment(reminder.createdAt).format("YYYY-MM-DD [at] HH:mm")}
      title="Reminder sent"
    >
      <div>Subject: {reminder.subject}</div>
      <div>{reminder.body}</div>
    </Event>
  );
};

export default ReminderEvent;
