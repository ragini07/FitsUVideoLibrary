import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import {Link , useNavigate}from 'react-router-dom'
import {useAuth} from '../../Context' 
function Header() {
   const navigate = useNavigate()
   const {token } = useAuth()
  return (
    <nav className="main-navhead">
  
  <div className='main-menu'>
  <img className="brand-logo" src={logo} alt="Brand Logo"/>
    <h3 className="brand"><Link to='/'>FitsU Play</Link></h3>
  </div>
   
    
 
    <div className='search-container'>
    <i className="fa fa-search"></i>
      <input></input>
    </div>
    <ul className="right-menu"> 
        <li onClick={() => token? navigate('/profile') : navigate('/login')}>
          <i className="fa fa-user fa-2x"></i>
        </li>
    </ul>
</nav>
  )
}

export {Header}