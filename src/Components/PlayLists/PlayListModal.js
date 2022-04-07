import { useState } from "react";
import { useAuth, useUser, useVideos } from "../../Context";
import { toast } from "react-toastify";
import {
  createPlayList,
  isInPlayList,
  addToPlayList,
  removeFromPlayList,
} from "../../Service/userAction";

function PlayListModal() {
  const { modal, setModal, modalVideo, setModalVideo } = useVideos();
  const [showInput, setShowInput] = useState(false);
  const [playListTitle, setPlayListTitle] = useState("");
  const { token } = useAuth();
  const { userData, dispatchUserData } = useUser();
  const { playlists } = userData;

  const createPlayListHandler = () => {
    playListTitle &&
      createPlayList(dispatchUserData, token, playListTitle, toast);
    setPlayListTitle("");
  };
  const videoToPlayListHandler = (e, playlist) => {
    if (e.target.checked) {
      addToPlayList(dispatchUserData, token, playlist, modalVideo, toast);
    } else {
      removeFromPlayList(dispatchUserData, token, playlist, modalVideo, toast);
    }
  };
  return (
    <>
      {modal && (
        <>
          <div class="modal">
            <div class="modal-body">
              <div className="modal-close">
                <div>Save to...</div>
                <span
                  onClick={() => setModal((prev) => !prev)}
                  class="cross close-modal"
                >
                  <i class="fa fa-times"></i>
                </span>
              </div>

              <div class="modal-content">
                {playlists.length > 0 &&
                  playlists.map((playlist) => {
                    const inPlayList = isInPlayList(playlist, modalVideo);
                    return (
                      <>
                        <label key={playlist._id} className="modal-label">
                          <input
                            onChange={(e) =>
                              videoToPlayListHandler(e, playlist)
                            }
                            checked={inPlayList}
                            type="checkbox"
                            name="category-checkbox"
                            id={playlist._id}
                          />
                          {playlist.title}
                        </label>
                      </>
                    );
                  })}
              </div>
              {showInput ? (
                <>
                  <div class="modal-title">PlayList Title</div>
                  <input
                    value={playListTitle}
                    onChange={(e) => setPlayListTitle(e.target.value)}
                    className="modal-input"
                    type="text"
                    placeholder="enter playlist title"
                  />
                  <div class="buttons-div">
                    <button onClick={createPlayListHandler} class="btn">
                      Create
                    </button>
                  </div>
                </>
              ) : (
                <div class="buttons-div">
                  <button
                    onClick={() => setShowInput((prev) => !prev)}
                    class="btn"
                  >
                    Create New PlayList
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export { PlayListModal };
