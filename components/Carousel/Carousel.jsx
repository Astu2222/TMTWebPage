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
      navigation={true} // Habilita la navegación
      pagination={{ clickable: true }} // Habilita la paginación
      onSwiper={(swiper)=> console.log(swiper)}
      onSlideChange={()=> console.log('slide change')}

      >

          <SwiperSlide className='single_testimonial1' style={{display:"flex",justifyContent:"center", alignItems:"end"}}>
            <div className="contenido">
            <h3>Slide-1</h3>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className='single_testimonial2' style={{display:"flex",justifyContent:"center", alignItems:"end"}}>
          <div className="contenido">
            <h3>Slide-2</h3>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
          </SwiperSlide>

          <SwiperSlide className='single_testimonial'>
            <h3>Slide-3</h3>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </SwiperSlide>

          <SwiperSlide className='single_testimonial'>
            <h3>Slide-4</h3>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </SwiperSlide>
          
      </Swiper>
    </>
      
  )

}

export default Carousel