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
    <meta name='description' content='Welcome to our nursery, Early Steps Daycare near Whitechapel station in Tower Hamlet (London), which provide childcare for 2 years old to 5 years old | Offsted Approved| We are currently enrolling, join now!'/>
    <meta name='keyword' content='Daycare, Nursery, Childcare, Whitechapel, Tower Hamlet, Ofsted-approve' />
    <link rel='canonical' href='/' />
    <script async type="text/javascript" src="https://seal.godaddy.com/getSeal?sealID=fUuf6Y5hGO8tnKuts6q3Kbet3if2pR8N8doaKQ7B1Fq9FdUyz9VMlVeFmOlB"></script>
    </Helmet>
        <p>Welcome to </p>
        <h1>Early Steps Daycare</h1>
        <div className='coverEnquiries'>
        <span className='linebreak'>For any questions or enquiries, please email us below</span>
        {/* <p>For any questions or enquiries, please email us below</p> */}
        </div>
        <div className='buttonHome'><a href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`} className='button'>Get in touch</a></div>
       <div className='coverAddress'>
        <span className='linebreak'>
        Arrange A Visit
        </span>
        <span className='linebreak'>
        47 Hobsons Place,
        </span>
        <span className='linebreak'>
        Woodseer St,
        </span>
        <span className='linebreak'>
        E1 5HH
        </span>
        </div>
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