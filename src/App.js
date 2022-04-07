import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Header,
  Home,
  Login,
  SignUp,
  VideoDetail,
  Videos,
  UserProfile,
  NotFound,
  PrivateRoute,
  History,
  Like,
  WatchLater,
  PlayLists,
  SinglePlayList,
  PlayListModal,
} from "./Components";
import Mockman from "mockman-js";

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        toastStyle={{ backgroundColor: "rgb(65, 61, 61)", color: "white" }}
        autoClose={3000}
      />

      <Header />
      <PlayListModal />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route
          path="/history"
          element={
            <PrivateRoute>
              <History />
            </PrivateRoute>
          }
        />
        <Route
          path="/likedvideos"
          element={
            <PrivateRoute>
              <Like />
            </PrivateRoute>
          }
        />
        <Route
          path="/watchlater"
          element={
            <PrivateRoute>
              <WatchLater />
            </PrivateRoute>
          }
        />
        <Route
          path="/playlists"
          element={
            <PrivateRoute>
              <PlayLists />
            </PrivateRoute>
          }
        />
        <Route
          path="/playlist/:id"
          element={
            <PrivateRoute>
              <SinglePlayList />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/testApi" element={<Mockman />} />
      </Routes>
    </>
  );
}

export default App;
