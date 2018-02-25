import moment from "moment";
import Event from "./Event";

const CommentEvent = ({ event }) => {
  const comment = event;
  return (
    <Event
      icon="commenting-o"
      date={moment(event.createdAt).format("YYYY-MM-DD [at] HH:mm")}
      title="Someone added a comment"
    >
      {comment.body}
    </Event>
  );
};

export default CommentEvent;
