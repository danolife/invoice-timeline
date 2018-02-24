import InvoiceDetails from "../components/InvoiceDetails";
import App from "../components/App";
import withData from "../lib/withData";

const invoice = ({ url: { query: { id } } }) => (
  <App>
    <h1>InvoiceX</h1>
    <h2>Invoice details</h2>
    <InvoiceDetails id={id} />
  </App>
);

export default withData(invoice);
