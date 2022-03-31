import './SideBar.css'
import {Link} from 'react-router-dom'
import {useState} from 'react'


export  function SideBar() {

    const [toggleSideBar , setToggleSideBar] = useState(false)

  return (
   <>
   <div 
        className="menu-btn"
        onClick={() => setToggleSideBar(prev => !prev)}><i class="fa fa-bars fa-2x"></i></div>
     <div className={`side-content side-content-mobile ${toggleSideBar ? 'show' : ''}`}>
            <div className="list2">
                <ul className="side-sublist"
                    onClick={() => setToggleSideBar(prev => !prev)}>
                    <li>
                        <Link to='/videos'>Home</Link>
                    </li>
                    <li>
                          <Link to='/videos'>Liked Videos</Link>
                    </li>
                    <li>
                         <Link to='/videos'>Watch Later</Link>
                    </li>
                    <li>
                      <Link to='/videos'>History</Link>
                    </li>
                    <li>
                         <Link to='/videos'>PlayList</Link>
                    </li>
          
              
             
                </ul>
            </div>
        </div>
   </>
  )
}
