import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from './images/logotrans.png'
import {Link} from 'react-scroll'
import './Navbar.css'

const Navbar = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)
const closeMenu = () => setClick(false)

  return (
    <div className='header'>
        <nav className='navbar'>
            <a href='/' className='logo'>
                <img src={logo} alt='logo' />
            </a>
            <div className='hamburger' onClick={handleClick}>
              {click ? (<FaTimes size={30} style={{color: '#000'}} />) 
              : (<FaBars size={30} style={{color: '#000'}} />)}
            </div>
            
              <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className='nav-item'>
                 <a href='/'><strong>Home</strong></a>
                </li>
                <li className='nav-item'>
                <a href='/news'><strong>News</strong></a>
                </li>
                <li className='nav-item'>
                 <a href='/about'><strong>About Us</strong></a>
                </li>
                <li className='nav-item'>
                 <a href='/vacancies'><strong>Vacancies</strong></a>
                </li>
                <li className='nav-item'>
                 <a href='/gallery'><strong>Gallery</strong></a>
                </li>


                {/* <li className='nav-item'>
                 <Link to="cover" spy={true} smooth={true} offset={0} duration={400} onClick={closeMenu}><strong>Home</strong></Link>
                </li>
                <li className='nav-item'>
                <Link to="about" spy={true} smooth={true} offset={-90} duration={400} onClick={closeMenu}><strong>About Us</strong></Link>
                </li>
                <li className='nav-item'>
                <Link to="jobs" spy={true} smooth={true} offset={-90} duration={400} onClick={closeMenu}><strong>Jobs</strong></Link>
                </li>
                <li className='nav-item'>
                <Link to="contact" spy={true} smooth={true} offset={-90} duration={400} onClick={closeMenu}><strong>Contact Us</strong></Link>
                </li> */}
                {/* <li className='nav-item'>
                 <a href='/'>Our Policies and Procedures</a>
                </li> */}
                {/* <li className='nav-item'>
                 <a href='/'>Our Staff</a>
                </li> */}
                                {/* <li className='nav-item'>
                 <a href='/'><strong>Tuition</strong></a>
                </li> */}
                {/* <li className='nav-item'>
                 <a href='/'>OFSTED</a>
                </li> */}
              </ul>
        </nav>
    </div>
  )
}

export default Navbar