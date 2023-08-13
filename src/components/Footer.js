import React from 'react'
import "./Footer.css";
import {FaDesktop} from 'react-icons/fa'


function Footer() {

    return (
        <div className="Footer">
            <div className='Footer-col2'>
                <p>© 2023 Early Steps Daycare. All rights reserved
                </p>
            </div>
            <div className='creator'>
                Created by Jameel Anwar
            {/* <div className='Footer_Icon'>
            <a href='https://jameelanwar.com/'>< FaDesktop/></a>
            <h6>Visit My Website</h6>
            </div> */}
            </div>
        </div>
    )
}

export default Footer
