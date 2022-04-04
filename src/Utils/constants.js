export const initialFilterState = {
    category : "",
    searchQuery: "",
}

export const initialUserDataState = {
   history : [],
   likedVideos : [],
   watchlater : [],
   playlists : []
}
export const ACTION_TYPE ={
    CATEGORY : "CATEGORY",
    FILTER_BY_SEARCH : "FILTER_BY_SEARCH",
    CLEAR_FILTER : "CLEAR_FILTER"
}