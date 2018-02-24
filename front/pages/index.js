import InvoiceList from "../components/InvoiceList";
import css from "./index.scss";
import withData from "../lib/withData";

const index = () => (
  <div className={css.index}>
    <h1>InvoiceX</h1>
    <InvoiceList />
  </div>
);

export default withData(index);
