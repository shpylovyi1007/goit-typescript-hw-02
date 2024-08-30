import React from "react";
import css from "./LoadMoreBtn.module.css";
import { ILoadMoreBtn } from "./LoadMoreBtn.types";


const LoadMoreBtn:React.FC<ILoadMoreBtn> = ({ onAddPage }) => {
  return (
    <button className={css.loadMore} onClick={onAddPage}>
      Load more
    </button>
  );
}

export default LoadMoreBtn;