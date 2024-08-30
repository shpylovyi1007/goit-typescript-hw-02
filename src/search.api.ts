import axios, { AxiosResponse } from "axios";
import { IUnsplashImage } from "./components/App/App.types";



axios.defaults.baseURL = "https://api.unsplash.com/";
const Key = "1S70mK_U78vDrlKzw53sEEKPm1gVixvIkp41MCLa4D4&";



interface IUnsplashResponse {
  results: IUnsplashImage[];
  total: number;
  total_pages: number;
}

const getImages = async (searchQuery:string, page:number = 1, perPage: number = 12): Promise<IUnsplashImage[]> => {
  try {
    const images: AxiosResponse<IUnsplashResponse> = await axios.get(`search/photos/?client_id=${Key}`, {
      params: {
        query: searchQuery,
        page,
        per_page: perPage,
      },
    });
    return images.data.results;
  } catch (e) {
    console.error("Error fetching images:", e);
    throw e;
  }
};

export default getImages;

