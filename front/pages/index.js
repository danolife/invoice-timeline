import Dashboard from "../components/Dashboard";
import css from "./index.scss";
import withData from "../lib/withData";

const index = () => (
  <div className={css.index}>
    <Dashboard />
  </div>
);

export default withData(index);
