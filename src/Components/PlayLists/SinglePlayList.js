import { useEffect, useState } from "react";
import { SideBar } from "../SideBar/SideBar";
import { useAuth, useUser } from "../../Context";
import PlayListVideoCard from "./PlayListVideoCard";
import VideoCard from "../Videos/VideoCard";
import { useParams } from "react-router-dom";

function SinglePlayList() {
  const [playListVideos, setPlayListVideos] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { userData, dispatchUserData } = useUser();
  const { playlists } = userData;
  const { token } = useAuth();
  const { id } = useParams();

  const playListSelected = playlists.find((item) => item._id === id);
  const { title, videos } = playListSelected;

  return (
    <>
      <div className="main-container">
        <SideBar />
        <div className="main-content">
          {videos.length > 0 ? (
            <>
              <h3>{`${title}(${videos.length} video)`}</h3>
              <div className="grid-responsive">
                {videos.map((video) => {
                  return (
                    <PlayListVideoCard
                      key={video._id}
                      video={video}
                      playListSelected={playListSelected}
                    />
                  );
                })}
              </div>
            </>
          ) : (
            <h2>Looks like you haven't added any video to {title} playlist.</h2>
          )}
        </div>
      </div>
    </>
  );
}

export { SinglePlayList };
