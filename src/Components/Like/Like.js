import React from 'react'
import {SideBar} from '../SideBar/SideBar'
import { useAuth } from '../../Context/auth-context'
import { useUser}  from '../../Context/user-context'
import VideoCard from '../Videos/VideoCard'


function Like() {
    const {userData , dispatchUserData} = useUser()
    const {likedVideos} = userData
    const {token} = useAuth()
  return (
    <>
     <div className="main-container">
        <SideBar />
        <div className="main-content">
        {
                likedVideos.length > 0 ? (<>            
                            <h3>{`Liked Videos(${likedVideos.length} video)`}</h3>
                    <div className='grid-responsive'>
                        {
                            likedVideos.map((video) => {
                                    return (<VideoCard key={video._id} video={video}/>)
                            })
                        }
                    </div>
                </>
                   
                ) : (
                    <h2>Looks like you haven't liked any video yet</h2>
                )
            }
        </div>
    </div>
    </>
  )
}

export { Like}