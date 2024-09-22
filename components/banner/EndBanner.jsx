"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const EndBanner = () => {
    const [scaleBanner1, setScaleBanner1] = useState(false)
    const [scaleBanner2, setScaleBanner2] = useState(false)
    return (
        <div className="flex flex-wrap md:flex-nowrap gap-5 container mx-auto py-10 justify-center md:justify-between">
            <Link href="#">
                <div className="relative hover:rotate-2 transition-all duration-200" onMouseEnter={() => setScaleBanner1(true)} onMouseLeave={() => setScaleBanner1(false)}>
                    <Image
                        src="/images/pic/banner11.jpg"
                        alt="Banner1"
                        height={488}
                        width={1400}
                        className="rounded-md"
                        quality="100" />
                    <h2 className={scaleBanner1 ? "absolute top-5 right-5 scale-110 transition-all duration-200 " : "absolute top-5 right-5 scale-100 transition-all duration-200 "}>بنر تبلیغاتی یک</h2>
                    <p className={scaleBanner1 ? "absolute top-20 right-5 text-sm transition-all duration-200 hidden sm:block" : "absolute top-16 right-5 text-sm transition-all duration-200 hidden sm:block"}>این متن تست می باشد .  این متن فقط برای نمایش است به این   متن <br />زیاد دقت نفرمایید ین متن جهت نمایش می باش.  این متن جهت نمایش می باشد</p>
                </div>
            </Link>
            <Link href="#">
                <div className="relative hover:-rotate-2 transition-all duration-200" onMouseEnter={() => setScaleBanner2(true)} onMouseLeave={() => setScaleBanner2(false)}>
                    <Image
                        src="/images/pic/banner22.jpg"
                        alt="Banner1"
                        height={488}
                        width={1400}
                        className="rounded-md hover:-rotate-2 transition-all duration-200"
                        quality="100" />
                    <h2 className={scaleBanner2 ? "absolute top-5 right-5 scale-110 transition-all duration-200 " : "absolute top-5 right-5 scale-100 transition-all duration-200 "}>بنر تبلیغاتی دو</h2>
                    <p className={scaleBanner2 ? "absolute top-20 right-5 text-sm transition-all duration-200 hidden sm:block" : "absolute top-16 right-5 text-sm transition-all duration-200 hidden sm:block"}>این متن تست می باشد .  این متن فقط برای نمایش است به این   متن <br />زیاد دقت نفرمایید ین متن جهت نمایش می باش.  این متن جهت نمایش می باشد</p>
                </div>

            </Link>
        </div>
    );
}

export default EndBanner;