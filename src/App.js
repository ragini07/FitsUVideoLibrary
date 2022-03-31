
import { Routes,Route} from 'react-router-dom';
import {Header , Home ,Login,SignUp,VideoDetail,Videos,UserProfile,NotFound} from './Components'
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
        <Route path='*' element={<NotFound/>}/>
        <Route path="/testApi" element={<Mockman />} />
      </Routes>
    </>
  
   
  );
}

export default App;
