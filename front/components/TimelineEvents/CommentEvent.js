import moment from "moment";
import Event from "./Event";

const CommentEvent = ({ event }) => {
  const comment = event;
  return (
    <Event
      icon="commenting-o"
      date={moment(comment.createdAt).format("YYYY-MM-DD [at] HH:mm")}
      title={`${comment.createdBy.name} added a comment`}
    >
      {comment.body}
    </Event>
  );
};

export default CommentEvent;
