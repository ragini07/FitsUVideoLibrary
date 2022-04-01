import './SideBar.css'
import {Link , NavLink} from 'react-router-dom'
import {useState} from 'react'


export  function SideBar() {

    const [toggleSideBar , setToggleSideBar] = useState(false)

    const activeLink = ({isActive}) => isActive ? "active-link" : ""
          

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
                        <NavLink className={activeLink} to='/videos'>Home</NavLink>
                    </li>
                    <li>
                          <NavLink className={activeLink} to='/likedvideos'>Liked Videos</NavLink>
                    </li>
                    <li>
                         <NavLink className={activeLink} to='/watchlater'>Watch Later</NavLink>
                    </li>
                    <li>
                      <NavLink className={activeLink} to='/history'>History</NavLink>
                    </li>
                    <li>
                         <NavLink className={activeLink} to='/vide'>PlayList</NavLink>
                    </li>
          
              
             
                </ul>
            </div>
        </div>
   </>
  )
}
