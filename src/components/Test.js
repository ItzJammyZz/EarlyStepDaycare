// This is About Us Page, I will change the file name later but for now, know that this is About Us Page.

import React from 'react'
import './Test.css'
// import ImgAbout from './images/Smart.jpg'
import VideoPlayer from './videoPlayer'

const Test = () => {
  return (
    <div className='wrapper'>
        <div className='content'>
            <div className='title'><h2>About Us</h2><span className='line'></span></div>
            <div className='subtitle1'>Early Steps Daycare is a new nursery taking in children aged 2 - 5 years. </div>
            <span className='linebreak'></span>
            <div className='subtitle1'>Its founders are two loving parents (a qualified primary school teacher and a qualified social worker) with a strong passion for childcare, rooted in their respective experience in education and social services.</div>
            <span className='linebreak'></span>
            <div className='subtitle1'>Although in its infancy, Early Steps’ values are rooted in its commitment to providing a comprehensive childcare service for parents and guardians, utilising the breadth of knowledge and experience gained from working within the education sector as well as working with children.</div>
            <span className='linebreak'></span>
            <div className='subtitle2'>Stay tuned for more fantastic updates…</div>
            <VideoPlayer />
            <div className='title'><h2>Our Team</h2><span className='line'></span></div>
            <div className='subtitle2'>
            <span className='linebreak'></span>
            Exciting things are on the horizon, as we are busy recruiting the right people to become a part of our tight knit ‘Early steps Daycare’ family as well as share its passion, commitment, dedication and values. Rest assured that we will carry out rigorous industry and background checks to ensure that we employ the very best staff, who excel within childcare. 
            <span className='linebreak'></span>
            For now, if you are interested in joining our team, please head over to our vacancies page to apply for available positions. 
            <span className='linebreak'></span>
            Thank you and Good Luck!
            </div>
        </div>
    </div>
  )
}

export default Test;

