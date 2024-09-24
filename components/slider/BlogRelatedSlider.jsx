

"use client"

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Link from 'next/link';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import BlogBoxRelated  from "./BlogBoxRelated"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation, Scrollbar } from 'swiper/modules';

export default function BlogRelatedSlider({title}) {
    return (
        <>
            <div className='border rounded-md pt-6 pb-10 my-8'>
                <div className="mx-4">
                    <div className='flex justify-between'>
                        <h2 className='mb-5 border-r-2 pr-3'>{title}</h2>
                        <Link href="/" className="flex border text-slate-50 items-center bg-gray-500 h-8 rounded-l-3xl px-5 rounded-r-md hover:bg-opacity-0 hover:border border-gray-500 transition-all duration-300 hover:text-gray-600">مشاهده همه </Link>
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
                                spaceBetween: 10,
                                
                            },
                        }}
                        navigation={true}
                        scrollbar={{ draggable: true }}
                        modules={[Pagination, Navigation, Scrollbar]}
                        className="mySwiper"
                    >
                        <SwiperSlide><BlogBoxRelated /></SwiperSlide>
                        <SwiperSlide><BlogBoxRelated /></SwiperSlide>
                        <SwiperSlide><BlogBoxRelated /></SwiperSlide>
                        <SwiperSlide><BlogBoxRelated /></SwiperSlide>
                        <SwiperSlide><BlogBoxRelated /></SwiperSlide>
                        <SwiperSlide><BlogBoxRelated /></SwiperSlide>
                        <SwiperSlide><BlogBoxRelated /></SwiperSlide>
                        <SwiperSlide><BlogBoxRelated /></SwiperSlide>
                        <SwiperSlide><BlogBoxRelated /></SwiperSlide>
                    </Swiper>
                </div>

            </div>
        </>
    );
}
