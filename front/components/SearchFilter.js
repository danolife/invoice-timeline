import { Component } from "react";
import css from "./SearchFilter.scss";

class SearchFilter extends Component {
  render() {
    return (
      <input
        className={css.SearchFilter}
        type="text"
        onChange={event => this.props.onChange(event.target.value)}
        placeholder="Search..."
      />
    );
  }
}

export default SearchFilter;
