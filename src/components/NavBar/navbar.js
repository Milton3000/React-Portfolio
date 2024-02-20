import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menu from "../../assets/menu.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  
  return (
    <nav className="navbar">
    <img src={logo} alt="logo" className='logo' />
    <div className="desktopMenu">

    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'> Home </Link>
    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'> About </Link>
    <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'> Portfolio </Link>
    <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'> Clients </Link>

    </div>
    <button className="desktopMenuBtn" onClick={() => {
      document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
    }}>
         <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me </button>

         <img src={menu} alt="Menu" className='burgerMenu' onClick={() => setShowMenu(!showMenu)}/>
    <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
    <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}> Home </Link>
    <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}> About </Link>
    <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}> Portfolio </Link>
    <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}> Clients </Link>
    <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}> Contact </Link>
    </div>
    </nav>
  )
}

export default Navbar;

// Spy = Spying, will check if it's on the particular id in "to".
// if you just scroll the site you'll see the active class working @ navbar because of the spy.

// Duration = in milliseconds

// Button: If you click this button, it will first find the id of "contact"
// and it will scroll to that through "scrollIntoView"