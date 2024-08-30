import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import React from "react";
import { ImageGalleryProps } from "./ImageGallery.types";
import { IUnsplashImage } from "../App/App.types";

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onTarget }:ImageGalleryProps) => {
  const targetImage = (e: React.MouseEvent<HTMLUListElement>) => {
    const targetElement = e.target as HTMLImageElement;
    if (targetElement.tagName !== "IMG") {
      return;
    }
    onTarget({
      src: targetElement.dataset.modal as string,
      alt: targetElement.alt,
    });
  };

  return (
    <ul className={css.list} onClick={targetImage}>
      {images.map(({ urls, alt_description, id }: IUnsplashImage) => {
        const { small, regular } = urls;
        return (
          <li key={id}>
            <ImageCard
              small={small}
              regular={regular}
              altDescription={alt_description}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ImageGallery;