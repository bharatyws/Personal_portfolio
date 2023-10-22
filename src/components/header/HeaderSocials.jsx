import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='linkedin.com' target='blank'><BsLinkedin/></a>
        <a href='github.com' target='blank'><FaGithubSquare/></a>
        <a href='instagram.com' target='blank'><AiFillInstagram/></a>
    </div>
  )
}

export default HeaderSocials