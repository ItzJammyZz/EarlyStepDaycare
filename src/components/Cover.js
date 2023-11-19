import React from 'react';
import './Cover.css';
import { Helmet } from 'react-helmet-async';

const email = "Contact@earlystepsdaycare.co.uk";
const subject = "Enquiry from Early Steps Daycare Website";
const body = "Dear Early Steps Daycare, \n\nI am interested in your daycare services and would like to schedule a visit. Please let me know your availability. \n\nThank you!";

const Cover = () => {
  return (
      <div className='contentHome'>     
    <Helmet>
    <title>Early Steps Daycare - Home</title>
    <meta name='description' content='Welcome to Early Steps Daycare located in heart of Whitechapel | Offsted Approved| We are currently enrolling, join now!'/>
    <meta name='keyword' content='Daycare, Nursery, Childcare, Whitechapel, Tower Hamlet, Ofsted-approve' />
    <link rel='canonical' href='/' />
    <script async type="text/javascript" src="https://seal.godaddy.com/getSeal?sealID=fUuf6Y5hGO8tnKuts6q3Kbet3if2pR8N8doaKQ7B1Fq9FdUyz9VMlVeFmOlB"></script>
    </Helmet>
        <p>Welcome to </p>
        <h1>Early Steps Daycare</h1>
        <p>For any questions or enquiries, please email us below</p>
        <div className='buttonHome'><a href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`} className='button'>Get in touch</a></div>
        <p>Arrange A Visit</p>
        {/* <p>47 Hobsons Place, Woodseer St, E1 5HH</p> */}
        <p>47 Hobsons Place,</p>
        <p>Woodseer St,</p>
        <p>E1 5HH</p>
      </div>
  );
};

export default Cover;



// const Cover = () => {
//   return (
//     <div className='cover' id='cover'>
//       <div className='content'>
//         <p>Welcome to </p>
//         <p>Early Steps™</p>
//         <p>Daycare</p>
//         <p>For any questions or enquiries, please email us below</p>
//         <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`} className='button'>Email Now</a>
//       </div>
//     </div>
//   );
// };