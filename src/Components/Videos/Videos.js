import "./Videos.css";
import { useState, useEffect } from "react";
import { SideBar } from "../SideBar/SideBar";
import { useNavigate } from "react-router-dom";
import VideoCard from "./VideoCard";
import { ACTION_TYPE } from "../../Utils/constants";
import axios from "axios";
import { useVideos } from "../../Context";
import {
  getVideosFromServer,
  getCategoryFromServer,
} from "../../Service/services";
import {
  filterByCategory,
  filterBySearchQuery,
  filterBySort,
} from "../../Utils";

function Videos() {
  const [showLoading, setShowLoading] = useState();
  const navigate = useNavigate();
  const {
    videos,
    setVideos,
    categories,
    setCategories,
    filterState,
    dispatchFilterState,
  } = useVideos();
  const { category, searchQuery, sortBy } = filterState;

  useEffect(() => {
    getVideosFromServer(setVideos);
    getCategoryFromServer(setCategories);
  }, []);

  const changeHandler = (type, payload) => {
    dispatchFilterState({ type, payload });
  };
  const filteredVideosByCategory = filterByCategory(videos, category);
  const filteredVideosBySearchQuery = filterBySearchQuery(
    filteredVideosByCategory,
    searchQuery
  );
  const finalFilteredVideos = filterBySort(filteredVideosBySearchQuery, sortBy);
  return (
    <>
      <div className="main-container">
        <SideBar />
        <div className="main-content">
          <div className="category-container">
            <div className="title-text">Category : </div>
            <button
              className={`btnn btn-outline-primary cat-list ${
                !category && "active-tab"
              }`}
              onClick={() =>
                dispatchFilterState({ type: ACTION_TYPE.CLEAR_FILTER })
              }
            >
              All
            </button>
            {categories.map(({ _id, categoryName }) => {
              return (
                <button
                  key={_id}
                  className={`btnn btn-outline-primary cat-list ${
                    categoryName === category && "active-tab"
                  }`}
                  onClick={() =>
                    changeHandler(ACTION_TYPE.CATEGORY, categoryName)
                  }
                >
                  {categoryName}
                </button>
              );
            })}
          </div>
          <div className="category-container">
            <div className="title-text">Sort : </div>
            <button
              className={`btnn btn-outline-primary cat-list ${
                sortBy === "Newest First" && "active-tab"
              }`}
              onClick={() =>
                dispatchFilterState({
                  type: ACTION_TYPE.SORT_BY,
                  payload: "Newest First",
                })
              }
            >
              Newest First
            </button>
            <button
              className={`btnn btn-outline-primary cat-list ${
                sortBy === "Oldest First" && "active-tab"
              }`}
              onClick={() =>
                dispatchFilterState({
                  type: ACTION_TYPE.SORT_BY,
                  payload: "Oldest First",
                })
              }
            >
              Oldest First
            </button>
          </div>

          <div className="grid-responsive">
            {finalFilteredVideos.map((video) => {
              return <VideoCard key={video._id} video={video} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export { Videos };
