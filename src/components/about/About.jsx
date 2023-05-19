import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {FaSuitcase} from 'react-icons/fa'
import {FaUserFriends} from 'react-icons/fa'
import {HiFolder} from 'react-icons/hi'

const About = () => {
  return (
   <section id='about'>
    <h5>Get to know</h5>
    <h2>About me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image"/>

        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaSuitcase className='about__icon'/>
            <h5>Experience</h5>
            <small>Fresher</small>
          </article>

          <article className="about__card">
            <FaUserFriends className='about__icon'/>
            <h5>Clients</h5>
            <small>NULL</small>
          </article>

          <article className="about__card">
            <HiFolder className='about__icon'/>
            <h5>Projects</h5>
            <small>10+ completed projects</small>
          </article>
        </div>

       
       <div className='about2'>
        <p>
        Hello and welcome to my portfolio! I'm currently a first year student pursuing a degree in B.Tech CSE, with a strong interest in web development and C++. In this portfolio, you will find examples of my best work in these areas. From designing responsive websites to building complex software applications, I've tackled a range of projects that showcase my skills and passion for programming.
        </p>
        </div>

      </div>
    </div>


    </section>
  )
}

export default About