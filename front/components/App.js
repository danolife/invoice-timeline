import css from "../style/layout.scss";
import Nav from "./Nav";

const App = ({ children }) => (
  <div className={css.container}>
    <Nav />
    {children}
  </div>
);

export default App;
