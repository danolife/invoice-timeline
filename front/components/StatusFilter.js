import { Component } from "react";
import { DUE, OVERDUE, PAID, DISPUTE } from "../../invoiceStatuses";

class StatusFilter extends Component {
  render = () => {
    return (
      <select onChange={event => this.props.onChange(event.target.value)}>
        <option value="">All statuses</option>
        <option value={DUE}>Due</option>
        <option value={OVERDUE}>Overdue</option>
        <option value={PAID}>Paid</option>
        <option value={DISPUTE}>Disptute</option>
      </select>
    );
  };
}
export default StatusFilter;
