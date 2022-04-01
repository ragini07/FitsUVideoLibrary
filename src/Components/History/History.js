import React from 'react'
import {SideBar} from '../SideBar/SideBar'
import VideoCard from '../Videos/VideoCard'
import './History.css'
import {clearHistory} from '../../Service/userAction'
import { useAuth } from '../../Context/auth-context'
import { useUser}  from '../../Context/user-context'


function History() {

  const {userData , dispatchUserData} = useUser()
  const {history} = userData
  const {token} = useAuth()

  const clearHistoryHandler = () => {
        clearHistory(dispatchUserData , token)
  }
  return (
  <>
     <div className="main-container">
      <SideBar />
      <div className="main-content">
         
            {
                history.length > 0 ? (<>
                        <div className='history-cta-container'>
                            <h3>{`History(${history.length} video)`}</h3>
                            <button 
                                onClick={clearHistoryHandler}
                                className="btn">Clear All</button>
                        </div>
                    
                    <div className='grid-responsive'>
                        {
                            history.map((video) => {
                                    return (<VideoCard key={video._id} video={video}/>)
                            })
                        }
                    </div>
                </>
                   
                ) : (
                    <h2>Looks like you haven't watched anything yet</h2>
                )
            }
      
    </div>
    </div>
  </>
  )
}

export  {History}