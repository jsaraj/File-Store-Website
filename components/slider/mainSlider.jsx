"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from 'next/link';


// import required modules
import { Autoplay, Pagination, Navigation, Scrollbar } from 'swiper/modules';

const getData = async () => {
  const data = await fetch("http://localhost:27017/api/get-active-main-slider")
  return data.json();
}

export default async function MainSlider() {


  const data = await getData();


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
          {
            data.map((slider, id) => (
              <Link href={slider.imageLink} key={id}>
                <SwiperSlide><Image src={slider.imageSrc} width={2000} height={679} alt={slider.imageAlt} quality={100} /></SwiperSlide>
              </Link>
            ))
          }
        </Swiper>
      </section>
    </>
  );
}
