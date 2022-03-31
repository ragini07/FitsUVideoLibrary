import './Videos.css'
import {useState , useEffect} from 'react'
import {SideBar} from '../SideBar/SideBar'
import {useNavigate} from 'react-router-dom'
import VideoCard from './VideoCard'
import axios from 'axios'
import {useVideos} from '../../Context/data-context'
import {getVideosFromServer , getCategoryFromServer} from '../../Service/services'
import {filterByCategory} from '../../Utils/getFilteredData'

function Videos() {
    const [isLoading , setIsLoading] = useState(false)
    const navigate = useNavigate()
    const {videos , setVideos , categories , setCategories ,filterState , dispatchFilterState} = useVideos()
    const { category } = filterState
  
    useEffect(() => {
        getVideosFromServer(setVideos)
        getCategoryFromServer(setCategories)
        
    },[])

    const changeHandler = (type , payload) =>{
        dispatchFilterState({type , payload})
    }
    const filteredVideos = filterByCategory(videos , category)
  return (
      <>
       <div className="main-container">
      <SideBar />
      <div className="main-content">
          <div className="category-container">
          <button 
                className={`btnn btn-outline-primary cat-list ${!category && 'active-tab'}`}
                onClick={() => dispatchFilterState({type : "CLEAR_FILTER"})}>All</button>
              {
                  categories.map(({_id,categoryName}) => {
                        return  (<button 
                                    key={_id} 
                                    className={`btnn btn-outline-primary cat-list ${categoryName === category && 'active-tab'}`}
                                    onClick={() => changeHandler("CATEGORY" , categoryName)}>{categoryName}</button>)
                  })
              }
              </div>
   
        <div className='grid-responsive'>
            {
                filteredVideos.map((video) => {
                        return (<VideoCard key={video._id} video={video}/>)
                })
            }
        </div>
    </div>
    </div>
    </>
  )
}

export {Videos}