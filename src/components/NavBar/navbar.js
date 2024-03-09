import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
import menu from "../../assets/menu.png";
import Luna2 from '../../assets/Luna2.png';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-scroll-to]');
      let scrollPosition = window.scrollY;

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = section.offsetTop + section.offsetHeight - 100;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          const sectionId = section.getAttribute('id');
          setActiveItem(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="logoContainer">
        <img src={Luna2} alt="logo" className='logo' />
        <p className="logoText">This is my dog, Luna</p>
      </div>
      <div className="desktopMenu">
        <Link
          to='intro'
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className={activeItem === 'intro' ? 'desktopMenuListItem active' : 'desktopMenuListItem'}
        >
          Home
        </Link>
        <Link
          to='skills'
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className={activeItem === 'skills' ? 'desktopMenuListItem active' : 'desktopMenuListItem'}
        >
          About
        </Link>
        <Link
          to='works'
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className={activeItem === 'works' ? 'desktopMenuListItem active' : 'desktopMenuListItem'}
        >
          Portfolio
        </Link>
        <Link
          to='clients'
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className={activeItem === 'clients' ? 'desktopMenuListItem active' : 'desktopMenuListItem'}
        >
          Clients
        </Link>
      </div>
      <button className="desktopMenuBtn" onClick={scrollToContact}>
        Contact Me
      </button>
      <img src={menu} alt="Menu" className='burgerMenu' onClick={toggleMenu} />
      {showMenu && (
        <div className="navMenu">
          <Link
            to='intro'
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className={activeItem === 'intro' ? 'listItem active' : 'listItem'}
            onClick={() => {setShowMenu(false); setActiveItem('intro');}}
          >
            Home
          </Link>
          <Link
            to='skills'
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className={activeItem === 'skills' ? 'listItem active' : 'listItem'}
            onClick={() => {setShowMenu(false); setActiveItem('skills');}}
          >
            About
          </Link>
          <Link
            to='works'
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className={activeItem === 'works' ? 'listItem active' : 'listItem'}
            onClick={() => {setShowMenu(false); setActiveItem('works');}}
          >
            Portfolio
          </Link>
          <Link
            to='clients'
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className={activeItem === 'clients' ? 'listItem active' : 'listItem'}
            onClick={() => {setShowMenu(false); setActiveItem('clients');}}
          >
            Clients
          </Link>
          <Link
            to='contact'
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className='listItem'
            onClick={() => {setShowMenu(false);}}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

// Spy = Spying, will check if it's on the particular id in "to".
// if you just scroll the site you'll see the active class working @ navbar because of the spy.

// Duration = in milliseconds

// Button: If you click this button, it will first find the id of "contact"
// and it will scroll to that through "scrollIntoView"