import React from 'react';
import './Vacancies.css';
import IVac from './images/Lvl3Practv2.jpeg';
import { Helmet } from 'react-helmet-async';

const email = "Contact@earlystepsdaycare.co.uk";
const subject = "Vacancy from Early Steps Daycare Website";
const body = "Dear Early Steps Daycare, \n\nI am interested in applying for Level 3 Childcare Practitioners. \n\nThank you!"

function Vacancies() {
  
  return (
    <div className='contentVac'>
            <Helmet>
    <title>Early Steps Daycare - Vacancies</title>
    <meta name='description' content='We are currently looking to fill in vacancies at our Early Steps Daycare.'/>
    <meta name='keyword' content='Vacancies, Jobs, Childcare Practitioners, Daycare, Nursery, Childcare, Whitechapel, Tower Hamlet, Ofsted-approve' />
    <link rel='canonical' href='/vacancies' />
    <script async type="text/javascript" src="https://seal.godaddy.com/getSeal?sealID=fUuf6Y5hGO8tnKuts6q3Kbet3if2pR8N8doaKQ7B1Fq9FdUyz9VMlVeFmOlB"></script>
      </Helmet>
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
        <span className='linebreak'></span> Qualified Level 3 Nursery practitioner, to join a new set up that's been recently Ofsted approved. <span className='linebreak'></span>
We are searching for practitioners with a few years of experience within a nursery setting as well as an understanding of the EYFS framework and Ofsted requirements. <span className='linebreak'></span>
Early Steps is a new local daycare nursery situated in Whitechapel and is family oriented with children's growth, welfare and learning at its core value. <span className='linebreak'></span>
We are looking to set the highest standard of childcare and education for young children and hope to find the right members of team to work alongside us and achieve this. <span className='linebreak'></span>
To apply for this position, you must hold a Childcare qualification minimum of LEVEL 3 as well as this, you should also have a minimum of 1 year of nursery experience. <span className='linebreak'></span>
The suggested hours are up to 40 hours a week, 5 days (this will be an initial requirement but can be negotiated later on, once the nursery is up and running). Salary starts from £22 - 25,000 per annum with potential to increase as the business grows... <span className='linebreak'></span>
As a new and upcoming daycare, we aim to promote Child-centred practice, one that is nurturing towards children and providing them with the best possible learning opportunity whilst also building a healthy and meaningful relationship with parents and carers. <span className='linebreak'></span>
Your experience and expertise will help us set this brand-new nursery venture into a thriving setting that nurtures, stimulates and enables children into happy, young and curious thinkers ready for reception and primary settings. <span className='linebreak'></span>
Therefore, experience and understanding of the EYFS framework and OFSTED regulations is also crucial, as these among many other things will enable our practitioners to become positive role model for children and to better enable support and monitoring of their performance to ensure the best outcomes for our children are achieved. <span className='linebreak'></span>
You will also collaborate with parents, carers and multi-professionals to ensure children's well-being and development, as well as ensuring children are kept in a safe and nurturing environment which is paramount to our ethos.<span className='linebreak'></span>
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

