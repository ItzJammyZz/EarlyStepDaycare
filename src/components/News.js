import React from 'react'
import './News.css'
import { Helmet } from 'react-helmet-async';

function News() {
  return (
    <div className='mainNews'>
      <Helmet>
    <title>Early Steps Daycare - News</title>
    <meta name='description' content='This is where you find the latest News about Early Steps Daycare, please check regularly for update.'/>
    <meta name='keyword' content='News, Updates, Daycare, Nursery, Childcare, Whitechapel, Tower Hamlet, Ofsted-approve' />
    <link rel='canonical' href='/news' />
    <script async type="text/javascript" src="https://seal.godaddy.com/getSeal?sealID=fUuf6Y5hGO8tnKuts6q3Kbet3if2pR8N8doaKQ7B1Fq9FdUyz9VMlVeFmOlB"></script>
      </Helmet>

      <div className='contentNews'>
    <div className='titleNews'><p>25th September 2023</p><span className='line'></span></div>
    <div className='subtitle1News'>We are currently looking to recruit qualified level 3 practitioners in Childcare, to join our team and work alongside us in our goal towards providing excellent childcare for all children. 
<span className='linebreak'>If you are interested, please head over to Vancancies page for more information.</span>
<span className='linebreak'>All The Best!</span>
<span className='linebreak'>Early Steps</span>
 </div>
 </div>
 
 <div className='contentNews'>
    <div className='titleNews'>
    <p>18th September 2023</p><span className='line'></span></div>
    <div className='subtitle1News'>
    Fantastic news! We are officially Ofsted approved... On Wednesday 13th September we had our Ofsted inspection.
    <span className='linebreak'></span>
    Ofsted reviewed our setting and granted us a certification. We are so happy to share this wonderful news with all of you, we look forward to opening our doors to all of you very soon.
    <span className='linebreak'></span>
    Best Wishes
    <span className='linebreak'></span>
    Early Steps
    </div>
 </div>
</div>




  )
}
export default News
