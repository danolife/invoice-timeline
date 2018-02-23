import css from "./Dashboard.scss";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const Dashboard = ({ data: { user } }) => (
  <div className={css.Dashboard}>
    This is the dashboard. You are logged in as {user.name}
  </div>
);

export const DashboardQuery = gql`
  query user {
    user {
      name
      profilePicture
    }
  }
`;

export default graphql(DashboardQuery)(Dashboard);
