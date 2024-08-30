import { IModal, IUnsplashImage } from "../App/App.types";

export interface ImageGalleryProps {
    images: IUnsplashImage[],
    onTarget: (modal: IModal) => void;
}