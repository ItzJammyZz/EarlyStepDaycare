import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import logo from './images/logotrans.png'
import Offer from './Offer'
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
              </ul>
        </nav>
        <Offer />
    </div>
  )
}

export default Navbar