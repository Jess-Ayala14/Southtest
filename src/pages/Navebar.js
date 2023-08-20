import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../Img/Icon.png'

import './Navebar.css'

const Navebar = () => {

  /// Setting mobile nav
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  //change nave color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  //close menu on click
  const closeMenu = () => setClick(false)

  return(
    <div className = { color? 'header header-bg': 'header' } >
      <nav className='navbar'>
        <a href='/' className='logo'>
          <img src={Logo} alt='logo' />
        </a>
        <div className='hamburger' onClick={handleClick}>
          {click ? (<FaTimes size={30} style={{ color: '#000000' }} />)
            : (<FaBars size={30} style={{ color: '#000000' }} />)}

        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className='nav-item'>
            <a href='/' onClick={closeMenu}>Home</a>
          </li>
          <li className='nav-item'>
            <a href='#About' onClick={closeMenu}>Company</a>
          </li>
          <li className='nav-item'>
            <a href='#Blog' onClick={closeMenu}>Our Products</a>
          </li>
          <li className='nav-item'>
            <a href='#Contact' onClick={closeMenu}>Contact</a>
          </li>
        </ul>
      </nav>
    </div >
)
}

export default Navebar;