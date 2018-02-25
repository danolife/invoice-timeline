import css from "./Nav.scss";
import Link from "next/link";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const Nav = ({ data }) => (
  <div className={css.Nav}>
    <h1>
      <Link href="/" prefetch>
        <a className={css.link}>InvoiceX</a>
      </Link>
    </h1>
    <div>
      <div className={css.name}>{data.user.name}</div>
      <img className={css.picture} src={data.user.picture} />
    </div>
  </div>
);

export const navQuery = gql`
  query user {
    user {
      id
      name
      picture
    }
  }
`;

export default graphql(navQuery)(Nav);
