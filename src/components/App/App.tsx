import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import getImages from "../../search.api";
import { IUnsplashImage } from "./App.types";
import { IModal } from "./App.types";


export default function App() {
  const [page, setPage] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [images, setImages] = useState<IUnsplashImage[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [targetImage, setTargetImage] = useState<IModal>({ src: "", alt: "" });
  const [errorMessage, setErrorMessage] = useState<string>("Ooops! Please reload!");



  const openModal = ({ src, alt }: IModal) => {
    setTargetImage({ src, alt });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setTargetImage({ src: "", alt: "" });
  };

  const setSearch = (query: string) => {
    setSearchQuery(query);
    setPage(1);
    setImages([]);
  };

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }

    const newImages = async () => {
      try {
        setIsLoad(true);
        setError(false);
        const images = await getImages(searchQuery, page);

        if (images.length < 11) {
          setErrorMessage("Sorry, we don't have another images");
          setPage(0);
          setError(true);
          return;
        }
        setErrorMessage("Ooops! Please reload!");

        setImages((prevImages) => {
          return [...prevImages, ...images];
        });
      } catch (e) {
        setError(true);
      } finally {
        setIsLoad(false);
      }
    };

    newImages();
  }, [page, searchQuery]);

  const addPage = () => {
    setPage(page + 1);
  };
  return (
    <>
      <SearchBar onSearch={setSearch} />
      {error ? (
        <ErrorMessage message={errorMessage} />
      ) : (
        <ImageGallery images={images} onTarget={openModal} />
      )}
      {isLoad && <Loader />}
      {page >= 1 && !isLoad && <LoadMoreBtn onAddPage={addPage} />}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        imgInfo={targetImage}
      />
    </>
  );
}

