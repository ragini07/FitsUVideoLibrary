import React from "react";
import { SideBar } from "../SideBar/SideBar";
import { Link } from "react-router-dom";
import { useAuth, useUser } from "../../Context";
import VideoCard from "../Videos/VideoCard";
import videoImg from "../../assets/Video.png";

function Like() {
  const { userData, dispatchUserData } = useUser();
  const { likedVideos } = userData;
  const { token } = useAuth();
  return (
    <>
      <div className="main-container">
        <SideBar />
        <div className="main-content">
          {likedVideos.length > 0 ? (
            <>
              <h3>{`Liked Videos(${likedVideos.length} video)`}</h3>
              <div className="grid-responsive">
                {likedVideos.map((video) => {
                  return (
                    <VideoCard key={video._id} video={video} from="like" />
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
              <h2>Looks like you haven't liked any videos yet!</h2>

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

export { Like };
