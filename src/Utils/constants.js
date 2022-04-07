export const initialFilterState = {
  category: "",
  searchQuery: "",
  sortBy: "",
};

export const initialUserDataState = {
  history: [],
  likedVideos: [],
  watchlater: [],
  playlists: [],
};
export const ACTION_TYPE = {
  CATEGORY: "CATEGORY",
  FILTER_BY_SEARCH: "FILTER_BY_SEARCH",
  SORT_BY: "SORT_BY",
  CLEAR_FILTER: "CLEAR_FILTER",
};
