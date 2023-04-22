import React from 'react'
import './About.css'
import ImgAbout from './images/Smart.jpg'

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='innertitleAbout'>
    About Us
      </div>
        <div className='container'>
            <div className='col-2'>
                <h2>About Us</h2>
                <span className='line'></span>
                <p>As you can see in the picture to my right. We have a woman who is holding a baby. Little did people know, the woman is being mind controlled by this</p>
            <div className='grid-container'>
            <div className='aboutcol'>
              <p className='aboutSubtitle'>
                Policies
              </p>
              <span className='line'></span>
              <p>
                This is my policies, I believe we should smack up your children because they are right piece of shit.
              </p>
            </div>
            <div className='aboutcol'>
              <p className='aboutSubtitle'>
              Ofstead
              </p>
              <span className='line'></span>
              <p>
                ⭐⭐⭐⭐⭐
              </p>
            </div>
            </div>
            </div>
            <div className='aboutImg'>
            <img src={ImgAbout} alt='AboutUs'/>
            </div>
        </div>
    </div>
  )
}

export default About