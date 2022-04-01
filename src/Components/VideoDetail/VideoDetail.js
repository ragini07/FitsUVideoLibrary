import { SideBar } from '../SideBar/SideBar'
import {useEffect , useState} from 'react'
import './VideoDetail.css'
import '../Videos/Videos.css'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useAuth} from '../../Context/auth-context'
import {addToLikedVideos , 
    removeFromLikedVideos , 
    isInLikedVideos , 
    isInWatchLater , 
    addToWatchLater , 
    removeFromWatchLater} from '../../Service/userAction'
import {useUser} from '../../Context/user-context'


function VideoDetail() {
    const [video , setVideo] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const {token} = useAuth()
    const { userData,dispatchUserData} = useUser()
    const {likedVideos , watchlater} = userData
    const {id} = useParams();
    useEffect(() => {
        (  async  () => {
                try{
                    setIsLoading(true)
                    const {data} = await axios.get(`/api/video/${id}`)
                    setVideo(data.video)
                    setIsLoading(false)
                }catch(error){
                    console.log("its error"+error)
                }
            })()
        },[])

        const isLiked = isInLikedVideos(likedVideos , video)
        const isSaveToWatchLater = isInWatchLater(watchlater , video)
        const likeHandler = () => {
            if(isLiked)
              return  removeFromLikedVideos(dispatchUserData , token , video)
            return addToLikedVideos(dispatchUserData , token , video)
        }
        const WatchLaterHandler= () => {
            if(isSaveToWatchLater)
                return  removeFromWatchLater(dispatchUserData , token , video)
            return addToWatchLater(dispatchUserData , token , video)
        }
   
  return (
      <>
    <div className="main-container">
         <SideBar />
         <div className="main-content">
            <div className="container-lg">
                <div className='iframe-container'>
                     <iframe type="text/html" src={`https://www.youtube.com/embed/${id}`}></iframe>
                </div>
                <div className='video-text-container'>
                    <div className='cta-container'>
                        <h3 className="video-title">{video.title}</h3>
                        <div className='video-cta-container'>
                         <button
                                onClick={likeHandler} 
                                className={`btnn btn-outline-primary cat-list ${isLiked && 'active-tab'}`}><i className="fa fa-thumbs-up"></i>Like</button>
                         <button 
                                    onClick={WatchLaterHandler}
                                    className={`btnn btn-outline-primary cat-list ${isSaveToWatchLater && 'active-tab'}`}><i className="fa fa-clock-o"></i>Watch Later</button>
                            
                           
                            <button className='btnn btn-outline-primary cat-list'><i className="fa fa-plus"></i>PlayList</button>
                        </div>
                    </div>
                    
                    <div className="video-subtitle-sm">{video.creator}</div>
                    <div className="video-subtitle">Description:</div>

                    <div className="video-des">{video.description}</div>
    
                </div>
            </div>
    
        </div>
    </div>
      </>
   
  )
}

export {VideoDetail}