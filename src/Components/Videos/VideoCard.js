import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useUser, useVideos } from "../../Context";
import { getDate } from "../../Utils";
import { toast } from "react-toastify";
import {
  addToHistory,
  isInHistory,
  removeFromHistory,
  isInWatchLater,
  addToWatchLater,
  removeFromWatchLater,
  removeFromLikedVideos,
} from "../../Service/userAction";

function VideoCard({ video, from }) {
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);
  const { modal, setModal, modalVideo, setModalVideo } = useVideos();
  const { token } = useAuth();
  const { userData, dispatchUserData } = useUser();
  const { _id, title, creator, category, description, createdAt } = video;
  const { history, watchlater } = userData;
  const isSaveToWatchLater = isInWatchLater(watchlater, video);

  const { date, month, year } = getDate(createdAt);

  const addToHistoryHandler = () => {
    navigate(`/video/${_id}`);
    if (token && !isInHistory(history, video))
      addToHistory(dispatchUserData, token, video);
  };

  const WatchLaterHandler = () => {
    if (token) {
      if (isSaveToWatchLater)
        return removeFromWatchLater(dispatchUserData, token, video, toast);
      return addToWatchLater(dispatchUserData, token, video, toast);
    } else {
      navigate("/login");
    }
  };
  const removeFromHistoryHandler = () => {
    removeFromHistory(dispatchUserData, token, video);
  };
  const removeFromLikedVideosHandler = () => {
    removeFromLikedVideos(dispatchUserData, token, video, toast);
  };
  const playListHandler = () => {
    if (token) {
      setShowOptions((prev) => !prev);
      setModal((prev) => !prev);
      setModalVideo(video);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="card-with-overlay">
      <img
        onClick={addToHistoryHandler}
        src={`https://img.youtube.com/vi/${_id}/maxresdefault.jpg`}
        alt="video preview"
      />

      <div className="card-text">
        <h4 className="card-heading">{title}</h4>
        <div
          onClick={() => setShowOptions((prev) => !prev)}
          className="card-options"
        >
          <icon className="fa fa-ellipsis-v"></icon>
        </div>
        {showOptions && (
          <div className="list-item">
            {from === "history" && (
              <div onClick={removeFromHistoryHandler}>
                <i className="fa fa-times"></i>Remove From History
              </div>
            )}
            {from === "like" && (
              <div onClick={removeFromLikedVideosHandler}>
                <i className="fa fa-thumbs-down"></i>DisLike
              </div>
            )}
            <div onClick={WatchLaterHandler}>
              {isSaveToWatchLater ? (
                <>
                  <i className="fa fa-times"></i>Remove From Watch Later
                </>
              ) : (
                <>
                  <i className="fa fa-clock-o"></i>Save To Watch Later
                </>
              )}{" "}
            </div>
            <div onClick={playListHandler}>
              <i className="fa fa-plus"></i>Save To PlayList
            </div>
          </div>
        )}
      </div>
      <div className="card-desc">
        <div>{creator}</div>
        <div>{`${month} ${date},${year}`}</div>
      </div>
    </div>
  );
}

export default VideoCard;
