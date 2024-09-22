"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';


// import required modules
import { Autoplay, Pagination, Navigation, Scrollbar } from 'swiper/modules';



export default function MainSlider() {
  return (
    <>
      <section className="container mx-auto my-5">
        <Swiper
          rewind={true}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          scrollbar={{ draggable: true }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, Scrollbar]}
          className="mySwiper h-96 cursor-pointer rounded"
        >
          <SwiperSlide><Image src={"/images/slider/slider1.jpg"} width={2000} height={679} alt='Slider1' quality={100} /></SwiperSlide>
          <SwiperSlide><Image src={"/images/slider/slider2.jpg"} width={2000} height={679} alt='Slider2' quality={100} /></SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
