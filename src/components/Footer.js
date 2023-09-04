import React, { useState, useEffect } from 'react';
import "./Footer.css";
import {FaDesktop} from 'react-icons/fa'
import {FaKeyboard} from 'react-icons/fa'
import {FaLaptop} from 'react-icons/fa'
import {FaMouse} from 'react-icons/fa'

function Footer() {

    return (
        <div className="Footer">
            <div className='Footer-col2'>
                <p>© 2023 Early Steps Daycare. All rights reserved
                </p>
            </div>
            <div className='SecuritySeal'><span id="siteseal"></span></div>
            <div className='creator'>
                Webdesign Jameel Anwar
            <div className='Footer_Icon'>
            <a href='http://www.jameelanwar.tech'>< FaMouse/></a>
            </div>
            </div>
        </div>
    )
}


export default Footer

// function Footer() {
//   const [scriptLoaded, setScriptLoaded] = useState(false);

//   useEffect(() => {
//     if (!scriptLoaded) {
//       // Create a script element for the GoDaddy Security Seal and append it to the DOM
//       const script = document.createElement('script');
//       script.type = 'text/javascript';
//       script.async = true;
//       script.src =
//         'https://seal.godaddy.com/getSeal?sealID=fUuf6Y5hGO8tnKuts6q3Kbet3if2pR8N8doaKQ7B1Fq9FdUyz9VMlVeFmOlB';

//       // Append the script to the DOM
//       document.getElementById('siteseal').appendChild(script);

//       // Mark the script as loaded to prevent future duplicate loads
//       setScriptLoaded(true);

//       // Clean up the script when the component unmounts
//       return () => {
//         script.remove();
//       };
//     }
//   }, [scriptLoaded]);

//   return (
//     <div className="Footer">
//       <div className="Footer-col2">
//         <p>© 2023 Early Steps Daycare. All rights reserved</p>
//       </div>
//       <div className="creator">
//         Webdesign Jameel Anwar
//         <div className="Footer_Icon">
//           <a href="http://www.jameelanwar.tech">
//             <FaMouse />
//           </a>
//         </div>
//       </div>
//       {/* Render the GoDaddy Security Seal */}
//       <span id="siteseal"></span>
//     </div>
//   );
// }

// export default Footer;

  



{/* <span id="siteseal"><script async type="text/javascript" src="https://seal.godaddy.com/getSeal?sealID=fUuf6Y5hGO8tnKuts6q3Kbet3if2pR8N8doaKQ7B1Fq9FdUyz9VMlVeFmOlB"></script></span> */}