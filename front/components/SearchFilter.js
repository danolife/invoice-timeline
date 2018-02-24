import { Component } from "react";

class SearchFilter extends Component {
  render() {
    return (
      <input
        type="text"
        onChange={event => this.props.onChange(event.target.value)}
        placeholder="Search..."
      />
    );
  }
}

export default SearchFilter;
