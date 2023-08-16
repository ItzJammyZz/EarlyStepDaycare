import React from 'react';
import './Cover.css';

const email = "Contact@earlystepsdaycare.co.uk";
const subject = "Enquiry from Early Steps Daycare Website";
const body = "Dear Early Steps Daycare, \n\nI am interested in your daycare services and would like to schedule a visit. Please let me know your availability. \n\nThank you!";

const Cover = () => {
  return (
    <div className='cover' id='cover'>
      <div className='content'>
        <p>Welcome to </p>
        <p>Early Steps™</p>
        <p>Daycare</p>
        <p>For any questions or enquiries, please email us below</p>
        <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`} className='button'>Email Now</a>
      </div>
    </div>
  );
};

export default Cover;
