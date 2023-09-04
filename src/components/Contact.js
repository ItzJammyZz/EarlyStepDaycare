import React from 'react'
import './Contact.css'
import {FaInstagram, FaTwitterSquare, FaFacebookSquare} from 'react-icons/fa'

function Contact() {
  return (
    <div className='contactContent'>
        <h2>Follow Us<span className='line'></span></h2>
        <div className='contactIcons'>
        <a href='https://www.instagram.com/earlysteps_daycare/'>< FaInstagram /></a>
        <a href='https://x.com/earlystepsdcare?s=11&t=XgxLi9cN0VBRn9seAql5Yg'>< FaTwitterSquare/></a>
        <a href='https://www.facebook.com/profile.php?id=100095376022429'>< FaFacebookSquare/></a>
        </div>
    </div>
  )
}

export default Contact