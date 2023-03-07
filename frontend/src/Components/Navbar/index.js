import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Svg from '../../assets/Images/svg/index.js';
import './navbar.scss'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar section-inner">
      <div className="container">
        <div className="logo">
          <img src={Svg.logo} alt="logo np" className='logo' />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
        <img src={Svg.hamburger} alt="artical np" className='articl' />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/" onClick={handleShowNavbar}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/blog" onClick={handleShowNavbar}>Blog</NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={handleShowNavbar}>Projects</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={handleShowNavbar}>About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={handleShowNavbar}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar