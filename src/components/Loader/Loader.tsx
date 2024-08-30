import { InfinitySpin } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loader} aria-label="Завантаження">
      <InfinitySpin width="200" color="#8276ff" />
    </div>
  );
}

export default Loader;