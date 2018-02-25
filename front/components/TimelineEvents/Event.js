import css from "./Event.scss";

const Event = ({ icon, title, date, children }) => (
  <div className={css.Event}>
    <div className={css.icon}>
      <i className={`fa fa-${icon}`} aria-hidden="true" />
    </div>
    <div className={css.details}>
      <div className={css.title}>{title}</div>
      <div className={css.date}>{date}</div>
      <div className={css.content}>{children}</div>
    </div>
  </div>
);

export default Event;
