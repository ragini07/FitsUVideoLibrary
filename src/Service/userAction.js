import axios from "axios";

export const isInHistory = (history, video) => {
  return history.some((el) => el._id === video._id);
};

export const isInLikedVideos = (likedVideos, video) => {
  return likedVideos.some((el) => el._id === video._id);
};
export const isInWatchLater = (watchlater, video) => {
  return watchlater.some((el) => el._id === video._id);
};

export const isInPlayList = (playlist, video) => {
  return playlist.videos.some((el) => el._id === video._id);
};

export const addToHistory = async (dispatchUserData, token, video) => {
  try {
    const { data, status } = await axios.post(
      "/api/user/history",
      {
        video,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 200 || status === 201)
      dispatchUserData({ type: "ADD_TO_HISTORY", payload: video });
  } catch (error) {
    console.error(error);
  }
};
export const removeFromHistory = async (dispatchUserData, token, video) => {
  try {
    const { data, status } = await axios.delete(
      `/api/user/history/${video._id}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 200) {
      dispatchUserData({ type: "REMOVE_FROM_HISTORY", payload: video });
    }
  } catch (error) {
    console.error(error);
  }
};
export const clearHistory = async (dispatchUserData, token, toast) => {
  try {
    const { data, status } = await axios.delete(`/api/user/history/all`, {
      headers: {
        authorization: token,
      },
    });
    if (status === 200) {
      toast.error("History cleared");
      dispatchUserData({ type: "CLEAR_HISTORY" });
    }
  } catch (error) {
    toast.error("Something went wrong");
    console.error(error);
  }
};
export const addToLikedVideos = async (
  dispatchUserData,
  token,
  video,
  toast
) => {
  try {
    const { data, status } = await axios.post(
      "/api/user/likes",
      {
        video,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 200 || status === 201) {
      toast.success("Added to Liked videos");
      dispatchUserData({ type: "ADD_TO_LIKED_VIDEOS", payload: video });
    }
  } catch (error) {
    toast.error("Something went wrong");
    console.error(error);
  }
};
export const removeFromLikedVideos = async (
  dispatchUserData,
  token,
  video,
  toast
) => {
  try {
    const { data, status } = await axios.delete(
      `/api/user/likes/${video._id}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 200) {
      toast.error("Removed from Liked videos");
      dispatchUserData({ type: "REMOVE_FROM_LIKED_VIDEOS", payload: video });
    }
  } catch (error) {
    toast.error("Something went wrong");
    console.error(error);
  }
};
export const addToWatchLater = async (
  dispatchUserData,
  token,
  video,
  toast
) => {
  try {
    const { data, status } = await axios.post(
      "/api/user/watchlater",
      {
        video,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 200 || status === 201) {
      toast.success("Added to Watch Later");
      dispatchUserData({ type: "ADD_TO_WATCH_LATER", payload: video });
    }
  } catch (error) {
    toast.error("Something went wrong");
    console.error(error);
  }
};
export const removeFromWatchLater = async (
  dispatchUserData,
  token,
  video,
  toast
) => {
  try {
    const { data, status } = await axios.delete(
      `/api/user/watchlater/${video._id}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 200) {
      toast.error("Removed from Watch Later");
      dispatchUserData({ type: "REMOVE_FROM_WATCH_LATER", payload: video });
    }
  } catch (error) {
    toast.error("Something went wrong");
    console.error(error);
  }
};
export const createPlayList = async (
  dispatchUserData,
  token,
  playListTitle,
  toast
) => {
  try {
    const { data, status } = await axios.post(
      "/api/user/playlists",
      {
        playlist: { title: playListTitle, description: "" },
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 200 || status === 201) {
      toast.success("Playlist created");
      dispatchUserData({ type: "CREATE_PLAYLIST", payload: data.playlists });
    }
  } catch (error) {
    toast.error("Something went wrong");
    console.error(error);
  }
};
export const deletePlayList = async (
  dispatchUserData,
  token,
  playlist,
  toast
) => {
  try {
    const { data, status } = await axios.delete(
      `/api/user/playlists/${playlist._id}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 200) {
      toast.error("Playlist deleted");
      dispatchUserData({ type: "DELETE_PLAYLIST", payload: data.playlists });
    }
  } catch (error) {
    toast.error("Something went wrong");
    console.error(error);
  }
};
export const addToPlayList = async (
  dispatchUserData,
  token,
  playlist,
  video,
  toast
) => {
  try {
    const { data, status } = await axios.post(
      `/api/user/playlists/${playlist._id}`,
      {
        video,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 200 || status === 201) {
      toast.success("Video added to playlist");
      dispatchUserData({ type: "ADD_TO_PLAYLIST", payload: data.playlist });
    }
  } catch (error) {
    toast.error("Something went wrong");
    console.error(error);
  }
};
export const removeFromPlayList = async (
  dispatchUserData,
  token,
  playlist,
  video,
  toast
) => {
  try {
    const { data, status } = await axios.delete(
      `/api/user/playlists/${playlist._id}/${video._id}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 200) {
      toast.error("Video removed from playlist");
      dispatchUserData({
        type: "REMOVE_FROM_PLAYLIST",
        payload: data.playlist,
      });
    }
  } catch (error) {
    toast.error("Something went wrong");
    console.error(error);
  }
};
