import { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { timelineQuery } from "./InvoiceTimeline";
import css from "./AddComment.scss";

class AddComment extends Component {
  state = {
    comment: ""
  };

  handleChange = event => {
    const comment = event.target.value;
    this.setState({ comment });
  };

  handleSubmission = event => {
    event.preventDefault();
    if (this.state.comment !== "") {
      this.props.mutate({
        variables: {
          invoiceId: this.props.invoiceId,
          content: this.state.comment
        }
      });
      this.setState({ comment: "" });
    }
  };

  render = () => (
    <form onSubmit={this.handleSubmission}>
      <textarea
        className={css.textarea}
        rows="4"
        value={this.state.comment}
        onChange={this.handleChange}
      />
      <button type="submit">Add comment</button>
    </form>
  );
}

const addCommentMutation = gql`
  mutation addComment($invoiceId: Int!, $content: String!) {
    addComment(invoiceId: $invoiceId, content: $content) {
      id
      invoice {
        id
      }
    }
  }
`;

export default graphql(addCommentMutation, {
  options: {
    refetchQueries: ({ data: { addComment: { invoice: { id } } } }) => {
      return [
        {
          query: timelineQuery,
          variables: {
            id
          }
        }
      ];
    }
  }
})(AddComment);
