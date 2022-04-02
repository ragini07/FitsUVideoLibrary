import {useEffect , useState} from 'react'
import {SideBar} from '../SideBar/SideBar'
import { useAuth } from '../../Context/auth-context'
import { useUser}  from '../../Context/user-context'
import PlayListVideoCard from './PlayListVideoCard'
import VideoCard from '../Videos/VideoCard'
import {useParams} from 'react-router-dom'
import axios from 'axios'



function SinglePlayList() {
    const [playListVideos , setPlayListVideos] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const {userData , dispatchUserData} = useUser()
    const {playlists} = userData
    const {token} = useAuth()
    const {id} = useParams()

    const playListSelected = playlists.find(item => item._id === id) 
    const {title , videos} = playListSelected
    console.log(playListSelected)

    // useEffect(() => {
    //  (   async () => {
    //         try{
    //             setIsLoading(true)
    //            const {data , status}  = await axios.get(`/api/user/playlists/${id}`)
    //            setPlayListVideos(data.videos)
    //            setIsLoading(false)
    //         }catch(error){
    //             console.log("error in getting video from playlist", error)
    //             setIsLoading(false)
    //         }
    //     })()
    // },[])

    return (
    <>
     <div className="main-container">
        <SideBar />
        <div className="main-content">
        {
                videos.length > 0 ? (<>            
                            <h3>{`${title}(${videos.length} video)`}</h3>
                    <div className='grid-responsive'>
                        {
                            videos.map((video) => {
                                    return (<PlayListVideoCard key={video._id} video={video} playListSelected={playListSelected}/>)
                            })
                        }
                    </div>
                </>
                   
                ) : (
                    <h2>Looks like you haven't added any video to {title} playlist.</h2>
                )
            }
        </div>
    </div>
    </>
  )
}

export { SinglePlayList}