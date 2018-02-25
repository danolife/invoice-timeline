import InvoiceList from "../components/InvoiceList";
import App from "../components/App";
import withData from "../lib/withData";

const index = () => (
  <App>
    <InvoiceList />
  </App>
);

export default withData(index);
