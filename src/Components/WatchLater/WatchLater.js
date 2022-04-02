import React from 'react'
import {SideBar} from '../SideBar/SideBar'
import { useAuth } from '../../Context/auth-context'
import { useUser}  from '../../Context/user-context'
import VideoCard from '../Videos/VideoCard'


function WatchLater() {
    const {userData , dispatchUserData} = useUser()
    const {watchlater} = userData
    const {token} = useAuth()
  return (
    <>
     <div className="main-container">
        <SideBar />
        <div className="main-content">
        {
                watchlater.length > 0 ? (<>            
                            <h3>{`Watch Later(${watchlater.length} video)`}</h3>
                    <div className='grid-responsive'>
                        {
                            watchlater.map((video) => {
                                    return (<VideoCard key={video._id} video={video} from="watchLater"/>)
                            })
                        }
                    </div>
                </>
                   
                ) : (
                    <h2>Looks like you haven't added any video to watch later</h2>
                )
            }
        </div>
    </div>
    </>
  )
}

export { WatchLater}