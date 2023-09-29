'use client'
import React from 'react';
import './Carousel.css';
import {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// Swipper
import { Navigation, Pagination } from 'swiper/modules';


import 'swiper/css/navigation';
import 'swiper/css/pagination';



const Carousel = () => {

  return (
    <>
      <Swiper className="Testimonial_container"

     
      spaceBetween={50}
      slidesPerView={1}
      height={"500px"}

      onSwiper={(swiper)=> console.log(swiper)}
      onSlideChange={()=> console.log('slide change')}

      >

          <SwiperSlide className='single_testimonial1' style={{display:"flex",justifyContent:"center", alignItems:"end"}}>
          <div className="contenido">
            
          </div>
          </SwiperSlide>

          <SwiperSlide className='single_testimonial2' style={{display:"flex",justifyContent:"center", alignItems:"end"}}>
          <div className="contenido">

          </div>
          </SwiperSlide>

          <SwiperSlide className='single_testimonial3'>
          <div className="contenido">
              <h1> prueba de contenido html</h1>
          </div>
          </SwiperSlide>

          <SwiperSlide className='single_testimonial4'>
          <div className="contenido">

          </div>
          </SwiperSlide>
          
      </Swiper>
    </>
      
  )

}

export default Carousel