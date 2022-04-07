import axios from "axios";

export const getVideosFromServer = async (setVideos) => {
  try {
    const { data, status } = await axios.get("/api/videos");
    if (status === 200) setVideos(() => data.videos);
  } catch (error) {
    console.error(error);
  }
};
export const getCategoryFromServer = async (setCategories) => {
  try {
    const { data, status } = await axios.get("/api/categories");
    if (status === 200) setCategories(() => data.categories);
    console.log("get data from server", data);
  } catch (error) {
    console.error(error);
  }
};
