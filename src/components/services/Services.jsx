import React from 'react'
import './services.css'
import {CgWebsite} from 'react-icons/cg'
import{AiFillAppstore} from 'react-icons/ai'
import RATE1 from '../../assets/RATE1.pdf'
import RATE2 from '../../assets/RATE2.pdf'

const Services = () => {
  return (
    <section id='services'>
    <div className='container1'> 
        <h5>What i offers </h5>
        <h2> My Services </h2>
        <div className='container2'>
            <article className='service1'>
              <CgWebsite/>
              <h3>Website Development</h3>
              <small>Build a stunning website with my experience web developers. Custom, responsive, and optimized for search engines. Contact me today!</small>
              <br></br>

       <a href={RATE1} download className='btn'>WebDev Rates</a>
            </article>
            
          <div className='container2'>  
            <article className='service1'>
              <AiFillAppstore/>
              <h3>App Development</h3>
              <small>Transform your idea into a successful app. Expert app development services. Contact us to make your vision a reality.</small>
              <br></br>
              
       <a href={RATE2} download className='btn'>AppDev Rates</a> 
            </article>
            </div>

        </div>


      </div>
    </section>
  )
}

export default Services