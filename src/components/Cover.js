import React from 'react';
import './Cover.css';

const email = "Contact@earlystepsdaycare.co.uk";
const subject = "Inquiry from Early Steps Daycare Website";
const body = "Dear Early Steps Daycare, \n\nI am interested in your daycare services and would like to schedule a visit. Please let me know your availability. \n\nThank you!";

const Cover = () => {
  return (
    <div className='cover' id='cover'>
      <div className='content'>
        <p>Catchy phrase </p>
        <p>Convincing point about sending children here</p>
        <p>Then reeling them in with the final notes</p>
        <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`} className='button'>Email Now</a>
      </div>
    </div>
  );
};

export default Cover;
