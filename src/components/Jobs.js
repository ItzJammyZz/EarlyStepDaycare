import React, { useState, useEffect } from 'react';
import sample from './images/Test.jpg'
import './Jobs.css'


const Jobs = () => {
  const [jobListings, setJobListings] = useState([]);
  const [hasJobListings, setHasJobListings] = useState(false);

  function addJobListings() {
    // For this example, we'll assume that there are no job listings available
    // If you have job listings, you can replace this code with logic to fetch them
    setJobListings([]);
    setHasJobListings(false); // Change this to false if you have nothing to add here
  }

  useEffect(() => {
    addJobListings();
  }, []);

  return (
    <div className='jobsAds' id='jobs'>
            <div className='innertitleJob'>
    Jobs
      </div>
      <div className='container'>
        <h2>We're Hiring</h2>
        <span className='line'></span>
        <div className='content' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          {hasJobListings ? (
            <div className='card'>
              <img src={sample} alt='sample'/>
              <p>Nursery Manager</p>
              <p><span>£25,000 - £27,500</span></p>
              <p>Flexible</p>
              <button className='jobButton'><a href='https://uk.indeed.com/viewjob?jk=7f86b6a4f04d2e3b'>Apply here</a>
              <p className='tooltiptext'>Indeed.com</p>
              </button>  
              <img src={sample} alt='sample'/>
              <p>Nursery Assistant Manager</p>
              <p><span>£25,000 - £27,500</span></p>
              <p>Flexible</p>
              <button className='jobButton'><a href='https://uk.indeed.com/viewjob?jk=7f86b6a4f04d2e3b'>Apply here</a>
              <p className='tooltiptext'>Indeed.com</p>
              </button> 
              <img src={sample} alt='sample'/>
              <p>Nursery Staff</p>
              <p><span>£25,000 - £27,500</span></p>
              <p>Flexible</p>
              <button className='jobButton'><a href='https://uk.indeed.com/viewjob?jk=7f86b6a4f04d2e3b'>Apply here</a>
              <p className='tooltiptext'>Indeed.com</p>
              </button> 
            </div>
          ) : (
            <p className='no-jobs-message'>Sorry, there are no job listings available at this time. Please come back later.</p>
          )}
        </div>
      </div>
    </div>
  )
}


// const Jobs = () => {
//   return (
//     <div className='jobsAds'>
//         <div className='container'>
//             <h2>We're Hiring</h2>
//             <span className='line'></span>
//             <div className='content'>
//                 <div className='card'>
//                     <img src={sample} alt='sample'/>
//                     <p>Nursery Manager</p>
//                     <p><span>£25,000 - £27,500</span></p>
//                     <p>Flexible</p>
//                     <button className='jobButton'><a href='https://uk.indeed.com/viewjob?jk=7f86b6a4f04d2e3b'>Apply here</a>
//                     <p className='tooltiptext'>Indeed.com</p>
//                     </button>  
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

export default Jobs