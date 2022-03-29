import './Home.css'
import {useState , useEffect} from 'react'
import {Link , useNavigate} from 'react-router-dom'
import axios from 'axios'
import {useVideos} from '../../Context/data-context'


function Home() {

  const [category , setCategory] = useState([])
  const [isLoading , setIsLoading] = useState(false)
  const navigate = useNavigate()
  const {filterState , dispatchFilterState} = useVideos()
  useEffect(() => {
   ( async () => {
        try{
          setIsLoading(true)
          const {data} = await axios.get('/api/categories')
          console.log(data.categories)
          setCategory(data.categories)
          setIsLoading(false)
        }catch(error){
          console.log("Error in category", error)
        }
    })()
  },[])
  return (
   <>
      <header className="showcase">
            <button className="btn"><Link to= '/videos' className="link-btn"> Explore <i class="fa fa-chevron-right"></i></Link></button>
        </header>

        <h2 class="title">Category</h2>
        <section class="home-cards grid-4-col">
         {   category.map(({_id,imageURL,categoryName}) => {
                               return ( 
                                <div 
                                className="home-card" 
                                    key={_id}
                                    onClick={() => {
                                              dispatchFilterState({type : "CATEGORY" , payload : categoryName})
                                             navigate('/videos')} } >
                                     <img src={imageURL} alt=""/>
                                    <h1 className="overlay">{categoryName}</h1>
                                </div>
                                        )
                           })}
        </section>
   </>
  )
}

export {Home}