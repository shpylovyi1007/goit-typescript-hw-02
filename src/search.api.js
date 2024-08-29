import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const Key = "1S70mK_U78vDrlKzw53sEEKPm1gVixvIkp41MCLa4D4&";

const getImages = async (searchQuery, page = 1, perPage = 12) => {
  try {
    const images = await axios.get(`search/photos/?client_id=${Key}`, {
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