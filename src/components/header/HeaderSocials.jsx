import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {ImGithub} from 'react-icons/im'
import {BsYoutube} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/rishi-raj-anand-206b49219/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/Rishi2333" target='_blank'><ImGithub/></a>
        <a href="https://www.youtube.com/@realrishi333" target='_blank'><BsYoutube/></a>
    </div>
  )
}

export default HeaderSocials