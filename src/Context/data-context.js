import { createContext, useContext, useReducer, useState } from "react";
import { filterReducerFtn } from "../Reducer/filterReducer";
import { initialFilterState } from "../Utils/constants";

const VideosContext = createContext();

const  VideosProvider= ({ children }) => {

    const [videos , setVideos ] = useState([])
    const [categories , setCategories] = useState([])
    const [filterState , dispatchFilterState] = useReducer(filterReducerFtn , initialFilterState)
  return (
    <VideosContext.Provider
      value={{videos , setVideos , categories , setCategories , filterState , dispatchFilterState} }
    >
      {children}
    </VideosContext.Provider>
  );
}

const useVideos = () => {
  return useContext(VideosContext);
}

export { useVideos , VideosProvider}