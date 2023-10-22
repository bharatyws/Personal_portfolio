import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {FaWhatsapp} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j8u17oe', 'template_swreerh', form.current, '99FkI-l0w-nKRXV0t')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <HiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>bharatyadavjws@gmail.com</h5>
            <a href="mailto:bharatyadavjws@gmail.com" target='blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <AiOutlineLinkedin className='contact_option-icon'/>
            <h4>Linkedin</h4>
            <h5>Bharat Yadav</h5>
            <a href="mailto:bharatyadavjws@gmail.com" target='blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <FaWhatsapp className='contact_option-icon'/>
            <h4>Whatapp</h4>
            <h5>+91 7082388468</h5>
            <a href="https://api.whatsapp.com/send?phone=7082388468" target='blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact