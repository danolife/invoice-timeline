import InvoiceDetails from "../components/InvoiceDetails";
import InvoiceStatus from "../components/InvoiceStatus";
import InvoiceTimeline from "../components/InvoiceTimeline";
import App from "../components/App";
import withData from "../lib/withData";
import AddComment from "../components/AddComment";
import InvoiceStatusModifier from "../components/InvoiceStatusModifier";

const invoice = ({ url: { query: { id } } }) => (
  <App>
    <h2>Invoice details</h2>
    <h3>Details</h3>
    <InvoiceDetails id={id} />
    <h3>Status</h3>
    <InvoiceStatusModifier id={id} />
    <InvoiceStatus id={id} />
    <h3>Add comment</h3>
    <AddComment invoiceId={id} />
    <h3>Timeline</h3>
    <InvoiceTimeline id={id} />
  </App>
);

export default withData(invoice);
