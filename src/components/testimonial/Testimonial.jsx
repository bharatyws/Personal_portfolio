import React from 'react'
import './testimonial.css'
import AVATAR1 from '../../assets/Avatar1.jpeg'
import AVATAR2 from '../../assets/Avatar2.png'
import AVATAR3 from '../../assets/Avatar3.png'
import AVATAR4 from '../../assets/Avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const client = [
  {
    id: 1,
    image: AVATAR1,
    name: 'CEO - MojoBoxx',
    review: 'I found him expremely inquisitive and hardworking. He was very much intrested to learn the functions of our core division and also willing to put his best efforts and get into the depth of the subject to understand it better.',
  },
  {
    id: 2,
    image: AVATAR2,
    name: 'HR - BHEL',
    review: 'He has been found very punctualsincere, hardworking, committed and capable to handle any task assigned to him. His conduct during the training was found outstanding.',
  },
  {
    id: 3,
    image: AVATAR3,
    name: 'Mahesh Udopadhyay',
    review: 'Bharat is  an innovative and creative person. It is very clear to me that he enjoy solving problems in different ways and using his creativity to develop new ideas. It is great seeing him use his creativity and innovation to perform well in this institute (Ducat).',
  },
  {
    id: 4,
    image: AVATAR4,
    name: 'Priya Darshini',
    review: 'You tackle issues and challenges with a positive, can-do attitude. Because of this, I have no doubt that you can accomplish anything you put your mind to. An attitude like that can change the world.',
  }
]

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review from Previous Employers</h5>
      <h2>Testimonials</h2>
      <Swiper className="container container_testimonials"
      // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      Pagination={{ clickable: true }}
      >
        { client.map(({id, image, name, review}) => {
        return(
          <SwiperSlide key={id} className="testimonial">
          <div className="client_avatar">
            <img src={image} alt='Client'/>
            </div>
            <h5 className='client_name'>{name}</h5>
            <small className='client_review'>
              {review}
            </small>
          
        </SwiperSlide>
        )}
        )}
      </Swiper>
    </section>
  )
}

export default Testimonial