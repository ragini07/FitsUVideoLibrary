import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useUser, useVideos } from "../../Context";
import { toast } from "react-toastify";
import { removeFromPlayList } from "../../Service/userAction";

function PlayListVideoCard({ video, playListSelected }) {
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);
  const { modalVideo, setModalVideo } = useVideos();
  const { token } = useAuth();
  const { userData, dispatchUserData } = useUser();
  const { _id, title, creator, category, description } = video;

  const addToHistoryHandler = () => {
    navigate(`/video/${_id}`);
    if (token && !isInHistory(history, video))
      addToHistory(dispatchUserData, token, video);
  };

  const playListHandler = () => {
    setShowOptions((prev) => !prev);
    removeFromPlayList(dispatchUserData, token, playListSelected, video, toast);
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
            <div onClick={playListHandler}>
              <i className="fa fa-times"></i>Remove From PlayList
            </div>
          </div>
        )}
      </div>
      <div className="card-desc">{creator}</div>
    </div>
  );
}

export default PlayListVideoCard;
