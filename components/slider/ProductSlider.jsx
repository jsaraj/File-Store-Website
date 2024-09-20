"use client"



import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation, Scrollbar } from 'swiper/modules'
import ProductBox from './ProductBox';

export default function App() {
    return (
        <>
            <section className='bg-orange-400 shadow-inner2 pt-6 pb-10 my-10'>
                <div className='mx-16'>
                    <h2 className='text-slate-50 mb-5 border-r-2 pr-3 border-slate-50'>محصولات</h2>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }}
                        navigation={true}
                        scrollbar={{ draggable: true }}
                        modules={[Pagination, Navigation, Scrollbar]}
                        className="mySwiper"
                    >
                        <SwiperSlide><ProductBox /></SwiperSlide>
                        <SwiperSlide><ProductBox /></SwiperSlide>
                        <SwiperSlide><ProductBox /></SwiperSlide>
                        <SwiperSlide><ProductBox /></SwiperSlide>
                        <SwiperSlide><ProductBox /></SwiperSlide>
                        <SwiperSlide><ProductBox /></SwiperSlide>
                        <SwiperSlide><ProductBox /></SwiperSlide>
                        <SwiperSlide><ProductBox /></SwiperSlide>
                        <SwiperSlide><ProductBox /></SwiperSlide>
                    </Swiper>
                </div>

            </section>
        </>
    );
}
