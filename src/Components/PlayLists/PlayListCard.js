import { useState } from "react";
import { useAuth, useUser } from "../../Context";
import VideoCard from "../Videos/VideoCard";
import { useNavigate } from "react-router-dom";
import { deletePlayList } from "../../Service/userAction";
import { toast } from "react-toastify";

function PlayListCard({ playlist }) {
  const [showOptions, setShowOptions] = useState(false);
  const { userData, dispatchUserData } = useUser();

  const navigate = useNavigate();
  const { playlists } = userData;
  const { token } = useAuth();

  const deletePlayListHandler = (playlist) => {
    deletePlayList(dispatchUserData, token, playlist, toast);
  };
  return (
    <div key={playlist._id} className="card-with-overlay">
      {playlist.videos.length > 0 ? (
        <>
          <img
            onClick={() => navigate(`/playlist/${playlist._id}`)}
            src={`https://img.youtube.com/vi/${playlist.videos[0]._id}/maxresdefault.jpg`}
            alt="video preview"
          />
          <div className="card-overlay-container text-overlap">
            <div className="overlay-text">
              {`${playlist.videos.length}+`}
              <i className="fa fa-play-circle icon-lg"></i>
            </div>{" "}
          </div>
        </>
      ) : (
        <>
          <img
            src="https://images.unsplash.com/photo-1617957771979-a91027b58dd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8eWVsbG93JTIwYmNha2dyb3VkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt="empty playlist"
          />
          <div className="card-title text-overlap">{`${playlist.title} is Empty`}</div>
        </>
      )}

      <div className="card-text">
        <h4 className="card-heading">{playlist.title}</h4>
        <div
          onClick={() => setShowOptions((prev) => !prev)}
          className="card-options"
        >
          <icon className="fa fa-ellipsis-v"></icon>
        </div>
        {showOptions && (
          <div className="list-item">
            <div onClick={() => deletePlayListHandler(playlist)}>
              <i className="fa fa-times"></i>Delete PlayList
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export { PlayListCard };
