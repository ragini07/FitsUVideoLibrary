import React from "react";
import { SideBar } from "../SideBar/SideBar";
import { useAuth, useUser } from "../../Context";
import VideoCard from "../Videos/VideoCard";
import videoImg from "../../assets/Video.png";
import { Link } from "react-router-dom";

function WatchLater() {
  const { userData, dispatchUserData } = useUser();
  const { watchlater } = userData;
  const { token } = useAuth();
  return (
    <>
      <div className="main-container">
        <SideBar />
        <div className="main-content">
          {watchlater.length > 0 ? (
            <>
              <h3>{`Watch Later(${watchlater.length} video)`}</h3>
              <div className="grid-responsive">
                {watchlater.map((video) => {
                  return (
                    <VideoCard
                      key={video._id}
                      video={video}
                      from="watchLater"
                    />
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
              <h2>Looks like you haven't added any video to watch later</h2>

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

export { WatchLater };
