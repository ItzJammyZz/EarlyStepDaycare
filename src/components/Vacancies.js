// import React from 'react'
// import './Vacancies.css'
// import IVac from './images/Lvl3Pract.jpeg'

// const email = "Contact@earlystepsdaycare.co.uk";
// const subject = "Vacancy from Early Steps Daycare Website";
// const body = "Dear Early Steps Daycare, \n\nI am interested in applying for Level 3 Childcare Practitioners. \n\nThank you!"

// function Vacancies() {
//   return (
        
//         <div className='contentVac'> 
//         <div className='imageVac'>
//         <img src={IVac} alt='Vacancies' />
//         </div>
//             <div className='titleVac'><h2>Vacancies</h2><span className='line'></span></div>
//             <div className='subtitleTitle'><h3>We are currently looking for:</h3></div>
//             <div className='subtitle1Vac'>Qualified Level 3 Nursery practitioner, to join a new set up that's been recently Ofsted approved. We require someone with a few years of experience within a nursery setting as well as an understanding of the EYFS framework and Ofsted requirements. Early Steps is a new local daycare nursery situated in Whitechapel and is family oriented. We are looking to set the highest standard of childcare and education for young children and hope to find the right members of team to work alongside us and achieve this. To apply for this position, you must hold a Childcare qualification minimum of LEVEL 3 as well as this, you should also have a minimum of 1 year of nursery experience. The suggested hours are up to 40 hours a week, 5 days (this will be an initial requirement but can be negotiated later on, once the nursery is up and running) Salary starts from £22 - 25,000 per annum with potential to increase as the business grows... As we are a new and upcoming daycare, we aim to promote Child-centred practice, one that is nurturing to children and providing them with the best possible learning opportunity. Your duties, responsibilities and experience will help us set this brand-new nursery venture. Experience with EYFS framework and OFSTED is also crucial. In addition to being a role model for the children and to able to support and monitor their performance to ensure the best outcomes for our children. You will also collaborate with parents and multi-professionals to ensure children's well-being and development, as well as ensuring children are kept in a safe environment which is paramount to our ethos. </div>
//             {/* <div className='subtitle2Vac'>We are looking to recruit wonderful practitioners to our newly established daycare setting.</div> */}
//             <div className='buttonHome'><a href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`} className='button'>Contact Us</a></div>
//             {/* <div className='vacBut'><button className='buttonVac'>{'$vacacncies'}</button></div> */}
//         </div>
//   )
// }

// export default Vacancies


import React from 'react';
import './Vacancies.css';
import IVac from './images/Lvl3Pract.jpeg';

const email = "Contact@earlystepsdaycare.co.uk";
const subject = "Vacancy from Early Steps Daycare Website";
const body = "Dear Early Steps Daycare, \n\nI am interested in applying for Level 3 Childcare Practitioners. \n\nThank you!"

function Vacancies() {
  return (
    <div className='contentVac'>
      <div className='imageVac'>
        <img src={IVac} alt='Vacancies' />
      </div>
      <div className='textVac'>
        <div className='titleVac'>
          <h2>Vacancies</h2>
          <span className='line'></span>
        </div>
        <div className='subtitleTitle'>
          <h3>We are currently looking for:</h3>
        </div>
        <div className='subtitle1Vac'>
        Qualified Level 3 Nursery practitioner, to join a new set up that's been recently Ofsted approved. We require someone with a few years of experience within a nursery setting as well as an understanding of the EYFS framework and Ofsted requirements. Early Steps is a new local daycare nursery situated in Whitechapel and is family oriented. We are looking to set the highest standard of childcare and education for young children and hope to find the right members of team to work alongside us and achieve this. To apply for this position, you must hold a Childcare qualification minimum of LEVEL 3 as well as this, you should also have a minimum of 1 year of nursery experience. The suggested hours are up to 40 hours a week, 5 days (this will be an initial requirement but can be negotiated later on, once the nursery is up and running) Salary starts from £22 - 25,000 per annum with potential to increase as the business grows... As we are a new and upcoming daycare, we aim to promote Child-centred practice, one that is nurturing to children and providing them with the best possible learning opportunity. Your duties, responsibilities and experience will help us set this brand-new nursery venture. Experience with EYFS framework and OFSTED is also crucial. In addition to being a role model for the children and to able to support and monitor their performance to ensure the best outcomes for our children. You will also collaborate with parents and multi-professionals to ensure children's well-being and development, as well as ensuring children are kept in a safe environment which is paramount to our ethos.
        </div>
        {/* Add more text content here */}
        <div className='buttonHome'>
          <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`} className='button'>Contact Us</a>
        </div>
      </div>
    </div>
  );
}

export default Vacancies;
