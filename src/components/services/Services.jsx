import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>My Internships and Training</h5>
      <h2>Certification</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Mojoboxx</h3>
          </div>
            <ul className="service_list">
              <li>
                <BsCheck className='service_list-icon'/>
                <p>Succesfully completed 3+ months Paid Internship</p>
              </li>
              <li>
                <BsCheck className='service_list-icon'/>
                <p>Worked as Full time Web Designer</p>
              </li>
              <li>
                <BsCheck className='service_list-icon'/>
                <p>Exposed to UI/UX , HTML/CSS and Javascript</p>
              </li>
              <li>
                <BsCheck className='service_list-icon'/>
                <p>Worked on both, team projects and sole projects</p>
              </li>
              <li>
                <BsCheck className='service_list-icon'/>
                <p>Team member of developers of present Mojoboxx website</p>
              </li>
            </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>BHEL</h3>
          </div>
            <ul className="service_list">
              <li>
                <BsCheck className='service_list-icon'/>
                <p>Sucessfully completed 3+ months full time Internship</p>
              </li>
              <li>
                <BsCheck className='service_list-icon'/>
                <p>Exposed to technologies and tools like Javascript, React and SQL</p>
              </li>
              <li>
                <BsCheck className='service_list-icon'/>
                <p>Worked on a project "Key Management Highlight System" exclusively for this organisation</p>
              </li>
              <li>
                <BsCheck className='service_list-icon'/>
                <p>Created a Website to handle several data inputs of multiple fields.</p>
              </li>
              <li>
                <BsCheck className='service_list-icon'/>
                <p>Handled the data of Employees and Sales/Purchases of Company</p>
              </li>
              <li>
                <BsCheck className='service_list-icon'/>
                <p>Worked in Team and got 10/10 remarks</p>
              </li>
            </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Ducat</h3>
          </div>
            <ul className="service_list">
              <li>
                <BsCheck className='service_list-icon'/>
                <p>Completed a 6 months certification course of Full Stack Development</p>
              </li>
              <li>
                <BsCheck className='service_list-icon'/>
                <p>Learned Technologies and Tools (JS, React, JQuerry, Node and many more)</p>
              </li>
              <li>
                <BsCheck className='service_list-icon'/>
                <p>Created a compulsory certified project i.e. e-commerce website</p>
              </li>
              <li>
                <BsCheck className='service_list-icon'/>
                <p>Took part in various challenges and competetion</p>
              </li>
              <li>
                <BsCheck className='service_list-icon'/>
                <p>Got Excelent remarks on completion of the particular course.</p>
              </li>
            </ul>
        </article>
      </div>
    </section>
  )
}

export default Services