import { IModal } from "../App/App.types";


export interface ImageModalProps {
    isOpen: boolean;
    onRequestClose: () => void,
    imgInfo: IModal
  }