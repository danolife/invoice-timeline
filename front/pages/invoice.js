import InvoiceDetails from "../components/InvoiceDetails";
import InvoiceStatus from "../components/InvoiceStatus";
import InvoiceTimeline from "../components/InvoiceTimeline";
import App from "../components/App";
import withData from "../lib/withData";

const invoice = ({ url: { query: { id } } }) => (
  <App>
    <h1>InvoiceX</h1>
    <h2>Invoice details</h2>
    <h3>Details</h3>
    <InvoiceDetails id={id} />
    <h3>Status</h3>
    <InvoiceStatus id={id} />
    <h3>Timeline</h3>
    <InvoiceTimeline id={id} />
  </App>
);

export default withData(invoice);
