import { initialUserDataState } from "../Utils";

export const userReducerFtn = (state, action) => {
  switch (action.type) {
    case "ADD_TO_HISTORY": {
      return { ...state, history: [...state.history, { ...action.payload }] };
    }
    case "REMOVE_FROM_HISTORY": {
      return {
        ...state,
        history: state.history.filter((el) => el._id !== action.payload._id),
      };
    }
    case "CLEAR_HISTORY": {
      return { ...state, history: [] };
    }
    case "ADD_TO_LIKED_VIDEOS": {
      return {
        ...state,
        likedVideos: [...state.likedVideos, { ...action.payload }],
      };
    }
    case "REMOVE_FROM_LIKED_VIDEOS": {
      return {
        ...state,
        likedVideos: state.likedVideos.filter(
          (el) => el._id !== action.payload._id
        ),
      };
    }
    case "ADD_TO_WATCH_LATER": {
      return {
        ...state,
        watchlater: [...state.watchlater, { ...action.payload }],
      };
    }
    case "REMOVE_FROM_WATCH_LATER": {
      return {
        ...state,
        watchlater: state.watchlater.filter(
          (el) => el._id !== action.payload._id
        ),
      };
    }
    case "CREATE_PLAYLIST": {
      return { ...state, playlists: action.payload };
    }
    case "DELETE_PLAYLIST": {
      return { ...state, playlists: action.payload };
    }
    case "ADD_TO_PLAYLIST": {
      return {
        ...state,
        playlists: state.playlists.map((playlist) => {
          if (playlist._id === action.payload._id) return action.payload;
          return playlist;
        }),
      };
    }
    case "REMOVE_FROM_PLAYLIST": {
      return {
        ...state,
        playlists: state.playlists.map((playlist) => {
          if (playlist._id === action.payload._id) return action.payload;
          return playlist;
        }),
      };
    }
    case "CLEAR_USER_DATA": {
      return initialUserDataState;
    }

    default:
      return state;
  }
};
