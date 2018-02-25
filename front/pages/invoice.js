import InvoiceDetails from "../components/InvoiceDetails";
import InvoiceStatus from "../components/InvoiceStatus";
import InvoiceTimeline from "../components/InvoiceTimeline";
import App from "../components/App";
import withData from "../lib/withData";
import AddComment from "../components/AddComment";
import css from "./invoice.scss";

const invoice = ({ url: { query: { id } } }) => (
  <App>
    <h2>Invoice details</h2>
    <div className={css.mainInformation}>
      <InvoiceDetails id={id} />
      <InvoiceStatus id={id} />
    </div>
    <h3>Add comment</h3>
    <AddComment invoiceId={id} />
    <h3>Timeline</h3>
    <InvoiceTimeline id={id} />
  </App>
);

export default withData(invoice);
