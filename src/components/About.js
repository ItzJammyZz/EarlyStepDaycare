import React from 'react'
import './About.css'
// import ImgAbout from './images/Smart.jpg'

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
                <ul>
                <li>Early Steps Daycare is a new nursery looking to open its doors before August 2023 (pending Ofsted registration).</li>
                <br/>
                <li>Its founders are two loving parents (Aqeel, a qualified primary school teacher and Imrose, a qualified social worker) with a strong passion for childcare, rooted in their respective experience in education and social services.</li>
                <br />
                <li>
                Although in its infancy, Early Steps’ values are rooted in its commitment to providing a comprehensive childcare service for parents and guardians, utilising the breadth of knowledge and experience gained from working within the education sector as well as working with children.
                </li>
                <br />
                <li>
                Stay tuned for more fantastic updates…
                </li>
              </ul>            
            <div className='grid-container'>
            <div className='aboutcol'>
              <p className='aboutSubtitle'>
                Our Team
              </p>
              <span className='line'></span>
              <p>
              As we are yet awaiting Ofsted approval, we are not open to the public.
However, behind the scenes we are committed to building a team that is meticulously vetted and in accordance to the standards set by Ofsted and EYFS. 
We look forward to building a tight knit team who will become a part of Early Steps Daycare and will share its passion, commitment, dedication and values.
Rest assured that we will carry out rigorous industry and background checks to ensure that we employ the very best staff, who excel within childcare.

              </p>
            </div>
            <div className='aboutcol'>
              <p className='aboutSubtitle'>
              Extra Curricular
              </p>
              <span className='line'></span>
              <p>
              Hmmm… work in progress, why not come back soon for an update…
              </p>
            </div>
            </div>
            </div>
            <div className='aboutImg'>
            {/* <img src={ImgAbout} alt='AboutUs'/> */}
            </div>
        </div>
    </div>
  )
}

export default About