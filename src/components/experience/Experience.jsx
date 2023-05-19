import React from 'react'
import './experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import {SiCss3} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {DiBootstrap} from 'react-icons/di'
import {SiTailwindcss} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {TbBrandRedux} from 'react-icons/tb'
import {BsFillSkipEndFill} from 'react-icons/bs'
import {FaNodeJs} from 'react-icons/fa'
import {SiMongodb} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {FaPython} from 'react-icons/fa'
import {FaCuttlefish} from 'react-icons/fa'
import {TbBrandCpp} from 'react-icons/tb'


const Experience = () => {
  return (
    <section id='experience'>
      

      <div className='experience__container'>
        <div className="leftexp">
          <div className="experience__content">
           

            

            <article className='experience__details'>
              <SiJavascript/>
              <h3>Javascript</h3>
              <small>Intermediate</small>
            </article>

            

           

            <article className='experience__details'>
              <FaReact/>
              <h3>React.js</h3>
              <small>Intermediate</small>
            </article>

            <article className='experience__details'>
              <TbBrandRedux/>
              <h3>Redux</h3>
              <small>Intermediate</small>
            </article>

            <article className='experience__details'>
              <BsFillSkipEndFill/>
              <h3>Next.js</h3>
              <small>Beginner</small>
            </article>
        </div>

        

        <div className='middle'><h3>My Skills <br></br>&
      </h3>
      <h2>My Experiences</h2></div>
        <div className="rightexp">
            

            <article className='experience__details'>
              <FaNodeJs/>
              <h3>Node.js</h3>
              <small>Intermediate</small>
            </article>

            <article className='experience__details'>
              <SiMongodb/>
              <h3>Mongo DB</h3>
              <small>Intermediate</small>
            </article>

            

            <article className='experience__details'>
              <FaPython/>
              <h3>Python</h3>
              <small>Intermediate</small>
            </article>

            

            <article className='experience__details'>
              <TbBrandCpp/>
              <h3>C++</h3>
              <small>Intermediate</small>
            </article>
          </div>
        </div>  
      </div>






    </section>
  )
}

export default Experience