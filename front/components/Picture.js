import css from "./Picture.scss";

const Picture = ({ url }) => (
  <div className={css.Picture}>
    <img src={url} alt="logo" />
  </div>
);

export default Picture;
