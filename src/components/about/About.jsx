import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {GoProjectSymlink} from 'react-icons/go'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <img src={ME} alt=''></img>
        </div>


        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Graduation</h5>
              <small>B.Tech CSE 2022</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Internships</h5>
              <small>6+ months</small>
            </article>

            <article className='about_card'>
              <GoProjectSymlink className='about_icon'/>
              <h5>Projects</h5>
              <small>18+ Completed</small>
            </article>
          </div>


          <p>
            A Web Developer cum Designer with intersnship experience of 6+ months with two major companies namely Bharat
            Heavy Electrical Ltd. (BHEL) and Mojoboxx where I was exposed to various projects and worked alongside Developer 
            and Design teams working on technologies like JavaScript, ReactJs, SQL, AdobeXD and many more.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About