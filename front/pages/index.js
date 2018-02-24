import InvoiceList from "../components/InvoiceList";
import css from "../style/layout.scss";
import withData from "../lib/withData";

const index = () => (
  <div className={css.container}>
    <h1>InvoiceX</h1>
    <InvoiceList />
  </div>
);

export default withData(index);
