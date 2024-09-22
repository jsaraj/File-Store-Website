"use client"

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Link from 'next/link';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation, Scrollbar } from 'swiper/modules'
import ProductBox from './ProductBox';

export default function App({title,linkslider,backcolor}) {
    return (
        <>
            <section className=' shadow-inner2 pt-6 pb-10 my-8' style={{background:`${backcolor}`}}>
                <div className='container mx-auto'>
                    <div className='flex justify-between text-slate-50'>
                        <h2 className='  mb-5 border-r-2 pr-3 border-gray-600'>{title}</h2>
                        <Link href={`${linkslider}`} className="flex border text-slate-50 items-center bg-gray-500 h-8 rounded-l-3xl px-5 rounded-r-md hover:bg-opacity-0 hover:border border-gray-500 transition-all duration-300 hover:text-gray-600">مشاهده همه </Link>
                    </div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}

                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 4,
                                
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
