import "./PlayList.css";
import { SideBar } from "../SideBar/SideBar";
import { useAuth, useUser } from "../../Context";
import VideoCard from "../Videos/VideoCard";
import { useNavigate } from "react-router-dom";
import { deletePlayList } from "../../Service/userAction";
import { PlayListCard } from "./PlayListCard";
import videoImg from "../../assets/Video.png";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function PlayLists() {
  const { userData, dispatchUserData } = useUser();

  const navigate = useNavigate();
  const { playlists } = userData;
  const { token } = useAuth();

  const deletePlayListHandler = (playlist) => {
    deletePlayList(dispatchUserData, token, playlist, toast);
  };
  return (
    <>
      <div className="main-container">
        <SideBar />
        <div className="main-content">
          {playlists.length > 0 ? (
            <>
              <h3>{`All PlayLists(${playlists.length})`}</h3>
              <div className="grid-responsive">
                {playlists.map((playlist) => {
                  return (
                    <>
                      <PlayListCard key={playlist._id} playlist={playlist} />
                    </>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="center-container">
              <img
                className="res-img sm-res-img"
                src={videoImg}
                alt="videoImg"
              />
              <h2>Looks like you haven't added any playlist</h2>

              <Link to="/videos">
                <button className="btn">Explore Now</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export { PlayLists };
