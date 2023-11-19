import React from 'react'
import './Contact.css'
import {FaInstagram, FaYoutube, FaTwitter, FaTiktok, FaFacebookSquare} from 'react-icons/fa'

function Contact() {
  return (
    <div className='contactContent'>
        <p>Follow Us<span className='line'></span></p>
        <div className='contactIcons'>
        <a href='https://www.instagram.com/earlysteps_daycare/' target='_blank' rel='nofollow' alt='Instagram'>< FaInstagram /></a>
        <a href='https://www.youtube.com/@EarlyStepsDaycare' target='_blank' rel='nofollow' alt='Youtube'>< FaYoutube /></a>
        <a href='https://x.com/earlystepsdcare?s=11&t=XgxLi9cN0VBRn9seAql5Yg' target='_blank' rel='nofollow' alt='Twitter'>< FaTwitter/></a>
        <a href='https://www.tiktok.com/@earlysteps_daycare' target='_blank' rel='nofollow' alt='TikTok'>< FaTiktok/></a>
        <a href='https://www.facebook.com/profile.php?id=100095376022429' target='_blank' rel='nofollow' alt='Facebook'>< FaFacebookSquare/></a>
        </div>
    </div>
  )
}

export default Contact