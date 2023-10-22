import React from 'react'
import './footer.css'
import {BiLogoInstagramAlt} from 'react-icons/bi'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'> Bharat Yadav</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="www.instagram.com"><BiLogoInstagramAlt/></a>
        <a href="www.linkedin.com"><BsLinkedin/></a>
        <a href="www.github.com"><BsGithub/></a>
      </div>

      <div className="footer_copyright">
        <samll>&copy; Bharat Yadav. All rights reserved. </samll>
      </div>
    </footer>
  )
}

export default Footer