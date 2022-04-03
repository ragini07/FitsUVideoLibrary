import React from 'react'
import './PlayList.css'
import {SideBar} from '../SideBar/SideBar'
import { useAuth , useUser} from '../../Context'
import VideoCard from '../Videos/VideoCard'
import { useNavigate } from 'react-router-dom'
import {deletePlayList} from '../../Service/userAction'


function PlayLists() {
    const {userData , dispatchUserData} = useUser()
    const navigate = useNavigate()
    const {playlists} = userData
    const {token} = useAuth()

    const deletePlayListHandler = (playlist) => {
        deletePlayList(dispatchUserData , token , playlist)
    }
  return (
    <>
     <div className="main-container">
        <SideBar />
        <div className="main-content">
        {
                playlists.length > 0 ? (<>            
                            <h3>{`All PlayLists(${playlists.length})`}</h3>
                    <div className='grid-responsive'>
                        {
                            playlists.map((playlist) => {
                                    return (<>
                                    <div className='playlist-container'>
                                    <div 
                                        key={playlist._id} 
                                        onClick= {() => navigate(`/playlist/${playlist._id}`)}
                                        className="playlist-text">
                                            <h3>{playlist.title}</h3>
                                             
                                        <div>{playlist.videos.length} videos</div>
                                       
                                    </div>
                                    <div className='overlay-icon'
                                        onClick={() => deletePlayListHandler(playlist)}><i className="fa fa-times"></i></div>
                                    </div>
                                    </>)
                            })
                        }
                    </div>
                </>
                   
                ) : (
                    <h2>Looks like you haven't added any playlist</h2>
                )
            }
        </div>
    </div>
    </>
  )
}

export { PlayLists}