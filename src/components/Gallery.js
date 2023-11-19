import './Gallery.css'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {FaTimesCircle} from 'react-icons/fa'
import {FaChevronCircleLeft} from 'react-icons/fa'
import {FaChevronCircleRight} from 'react-icons/fa'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async';

// Import all images from the directory
const importedImages = require.context('./images/gallery/', false, /\.(JPG|jpeg|png|)$/);

// Create an array of the imported image URLs
const images = importedImages.keys().map(importedImages);

const Gallery = () => {
    const [data, setData] = useState({img: '', i: 0})

    const viewImage = (img, i)=> {
        document.body.classList.add('disable-scroll');
        setData({img, i})
    }

    
    const imgAction = (action) => {
        let i = data.i;
        if (action === 'next-img' && i < images.length - 1) {
          setData({ img: images[i + 1], i: i + 1 });
        }
        if (action === 'prev-img' && i > 0) {
          setData({ img: images[i - 1], i: i - 1 });
        }
        if (!action) {
          setData({ img: '', i: 0 });
          // Remove the disable-scroll class when closing the image
          document.body.classList.remove('disable-scroll');
        } else {
          // Add the disable-scroll class when expanding the image
          document.body.classList.add('disable-scroll');
        }
        
      };
          
      
    return (


      <div className='gallery' id='gallery'>
            <Helmet>
    <title>Early Steps Daycare - Gallery</title>
    <meta name='description' content='To see what our Early Steps Daycare look like, please view our gallery.'/>
    <meta name='keyword' content='Daycare, Gallery, Nursery, Childcare, Whitechapel, Tower Hamlet, Ofsted-approve' />
    <link rel='canonical' href='/gallery' />
    <script async type="text/javascript" src="https://seal.godaddy.com/getSeal?sealID=fUuf6Y5hGO8tnKuts6q3Kbet3if2pR8N8doaKQ7B1Fq9FdUyz9VMlVeFmOlB"></script>
    </Helmet>

        {data.img &&
            <div className='backgroundGal'>
            <button className='closeGal' onClick={()=> imgAction()} style={{position: 'absolute', top: '10px', right: '10px'}}><FaTimesCircle/></button>
            <button className='prevGal' onClick={()=> imgAction('prev-img')}><FaChevronCircleLeft/></button>    
            <img className='imgGal' src={data.img } style={{width: 'auto', maxWidth: '100%', maxHeight:'100%'}} alt='Pictures'/>
            <button className='forwGal' onClick={()=> imgAction('next-img')}><FaChevronCircleRight/></button>
            </div>
        }
          <div className='container'>
        <div style={{padding: '100px'}}>
          <ResponsiveMasonry
                columnsCountBreakPoints={{350: 2}}
            >
                <Masonry gutter='20px'>
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block", cursor: 'pointer'}}
                            alt=""
                            onClick={()=> viewImage(image, i)}
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
            </div>
          </div>
      </div>
    )
  }

export default Gallery