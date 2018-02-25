import css from "../style/layout.scss";
import Link from "next/link";

const App = ({ children }) => (
  <div className={css.container}>
    <h1>
      <Link href="/" prefetch>
        <a class={css.link}>InvoiceX</a>
      </Link>
    </h1>
    {children}
  </div>
);

export default App;
