import withData from "../lib/withData";
import css from "../style/layout.scss";

const invoiceDetails = () => (
  <div className={css.container}>
    <h1>InvoiceX</h1>
    <h2>Invoice details</h2>
  </div>
);

export default withData(invoiceDetails);
