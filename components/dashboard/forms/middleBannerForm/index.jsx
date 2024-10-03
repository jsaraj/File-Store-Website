"use client"

import { useState } from "react";
import AllMidBanner from "./allMidBanner.jsx";
import NewMidBanner from "./newMidBanner.jsx/index.jsx";

const MiddleBannerForm = () => {

    const [detail, setDetail] = useState(<AllMidBanner />)

    return (
        <section className="flex flex-col gap-8 ">
            <div className="flex justify-between ">
                <div>
                    <h3>بنرهای تبلیغاتی</h3>
                </div>
                <div className="flex gap-5 items-center">
                    <button onClick={() => setDetail(<AllMidBanner />)} className=" px-3 py-1 rounded-md bg-orange-400 border text-white hover:bg-opacity-0 hover:border hover:border-orange-400 hover:text-orange-500 transition-all duration-200">همه</button>
                    <button onClick={() => setDetail(<NewMidBanner />)} className=" px-3 py-1 rounded-md bg-orange-400 border text-white hover:bg-opacity-0 hover:border hover:border-orange-400 hover:text-orange-500 transition-all duration-200">جدید</button>
                </div>
            </div>
            <div>
                {detail}
            </div>
        </section>
    );
}

export default MiddleBannerForm;