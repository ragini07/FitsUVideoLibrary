import { createContext, useContext, useReducer, useState } from "react";
import { filterReducerFtn } from "../Reducer/filterReducer";
import { initialFilterState } from "../Utils";

const VideosContext = createContext();

const VideosProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalVideo, setModalVideo] = useState({});
  const [filterState, dispatchFilterState] = useReducer(
    filterReducerFtn,
    initialFilterState
  );
  return (
    <VideosContext.Provider
      value={{
        videos,
        setVideos,
        categories,
        setCategories,
        filterState,
        dispatchFilterState,
        modal,
        setModal,
        modalVideo,
        setModalVideo,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
};

const useVideos = () => {
  return useContext(VideosContext);
};

export { useVideos, VideosProvider };
