import InvoiceList from "../components/InvoiceList";
import App from "../components/App";
import withData from "../lib/withData";

const index = () => (
  <App>
    <h1>InvoiceX</h1>
    <InvoiceList />
  </App>
);

export default withData(index);
