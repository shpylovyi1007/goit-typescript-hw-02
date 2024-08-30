import css from "./ImageCard.module.css";
import React from "react";
import {ImageCardProps} from './ImageCard.types'



const ImageCard: React.FC<ImageCardProps> = ({ small, regular, altDescription }) => {
  return (
    <div className={css.imageBorder}>
      <img className={css.image} src={small} data-modal={regular} alt={altDescription} />
    </div>
  );
}
export default ImageCard;