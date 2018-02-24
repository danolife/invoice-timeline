const FormattedAmount = ({ amount }) =>
  (amount / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "EUR"
  });

export default FormattedAmount;
