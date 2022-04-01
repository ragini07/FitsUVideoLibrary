
import { Routes,Route} from 'react-router-dom';
import {Header , Home ,Login,SignUp,VideoDetail,Videos,UserProfile,NotFound , PrivateRoute,History,Like,WatchLater} from './Components'
import Mockman from 'mockman-js'

function App() {
  return (
    <>
    <Header/>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/videos' element={<Videos/>} />
        <Route path='/video/:id' element={<VideoDetail/>} />
        <Route path='/profile' element={<UserProfile/>}/>
        <Route path='/history' element={<PrivateRoute><History/></PrivateRoute>} />
        <Route path='/likedvideos' element={<PrivateRoute><Like/></PrivateRoute>} />
        <Route path='/watchlater' element={<PrivateRoute><WatchLater/></PrivateRoute>} />
        <Route path='*' element={<NotFound/>}/>
        <Route path="/testApi" element={<Mockman />} />
      </Routes>
    </>
  
   
  );
}

export default App;
