import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useAuth} from '../../Context/auth-context'
import {addToHistory , isInHistory} from '../../Service/userAction'
import {useUser} from '../../Context/user-context'


function VideoCard({video}) {
    const navigate = useNavigate()
    const [showOptions , setShowOptions] = useState(false)
    const {token} = useAuth()
    const { userData,dispatchUserData} = useUser()
    const {_id ,title,creator,category,description} = video
    const {history} = userData
    console.log(showOptions)
    const addToHistoryHandler = () =>{
        navigate(`/video/${_id}`)
        if(token && !isInHistory(history , video))
            addToHistory(dispatchUserData , token , video)
    }

  return (
    <div className="card-with-overlay">
            <img onClick={addToHistoryHandler} src={`https://img.youtube.com/vi/${_id}/maxresdefault.jpg`} alt="video preview"/>         
            <div className='card-text'>
                <h4 className="card-heading">{title}</h4>
                <div 
                    onClick={() => setShowOptions(prev => !prev)}
                    className='card-options'>
                    <icon className='fa fa-ellipsis-v'></icon>
                </div>
                {
                    showOptions && <div className= "list-item">
                        <div><i className="fa fa-clock-o"></i>Save To Watch Later</div>
                        <div><i className="fa fa-plus"></i>Save To PlayList</div>
                    </div>
                }
            </div>
            <div className="card-desc">
                {creator}
            </div> 
    </div> 
  )
}

export default VideoCard