import { SideBar } from "../SideBar/SideBar";
import VideoCard from "../Videos/VideoCard";
import videoImg from "../../assets/Video.png";
import { Link } from "react-router-dom";
import "./History.css";
import { clearHistory } from "../../Service/userAction";
import { useAuth, useUser } from "../../Context";

import { toast } from "react-toastify";

function History() {
  const { userData, dispatchUserData } = useUser();
  const { history } = userData;
  const { token } = useAuth();

  const clearHistoryHandler = () => {
    clearHistory(dispatchUserData, token, toast);
  };
  return (
    <>
      <div className="main-container">
        <SideBar />
        <div className="main-content">
          {history.length > 0 ? (
            <>
              <div className="history-cta-container">
                <h3>{`History(${history.length} video)`}</h3>
                <button onClick={clearHistoryHandler} className="btn">
                  Clear All
                </button>
              </div>

              <div className="grid-responsive">
                {history.map((video) => {
                  return (
                    <VideoCard key={video._id} video={video} from="history" />
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
              <h2>Looks like you haven't watched anything yet</h2>

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

export { History };
