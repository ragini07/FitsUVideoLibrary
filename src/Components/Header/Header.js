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
    <img className="brand" src={logo} alt="Brand Logo"/>
    <h3 className="brand">FitsU Play</h3>
    <ul className="main-menu">
      <li> <Link to='/'>Home</Link> </li>
    </ul>
    <ul className="right-menu"> 
        <li onClick={() => token? navigate('/profile') : navigate('/login')}>
          <i className="fa fa-user fa-2x"></i>
        </li>
    </ul>
</nav>
  )
}

export {Header}