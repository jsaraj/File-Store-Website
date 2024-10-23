"use client"

import { useEffect, useState } from "react";
import AllMainSlider from "./allMainSlider";
import NewMainSlider from "./newMainSlider";
import MidBannerDetail from "./midBannerDetail";


const MiddleBannerForm = () => {

    const [mainSliderDetail, setMainSliderDetail] = useState("");
    const [randNnumberForBannerDetail, setRandNnumberForBannerDetail] = useState(1)
    const [detail, setDetail] = useState(<AllMainSlider setMainSliderDetail={setMainSliderDetail} setRandNnumberForBannerDetail={setRandNnumberForBannerDetail} />)


    useEffect(() => {
        if (mainSliderDetail != "") {
            setDetail(<MidBannerDetail mainSliderDetail={mainSliderDetail} />)
        }
    }, [randNnumberForBannerDetail])



    return (
        <section className="flex flex-col gap-8 ">
            <div className="flex justify-between ">
                <div>
                    <h3>اسلایدر اصلی</h3>
                </div>
                <div className="flex gap-5 items-center">

                    <button onClick={() => setDetail(<AllMainSlider setMainSliderDetail={setMainSliderDetail} setRandNnumberForBannerDetail={setRandNnumberForBannerDetail} />)} className=" px-3 py-1 rounded-md bg-orange-400 border text-white hover:bg-opacity-0 hover:border hover:border-orange-400 hover:text-orange-500 transition-all duration-200">همه</button>


                    <button onClick={() => setDetail(<NewMainSlider />)} className=" px-3 py-1 rounded-md bg-orange-400 border text-white hover:bg-opacity-0 hover:border hover:border-orange-400 hover:text-orange-500 transition-all duration-200">جدید</button>

                </div>
            </div>
            <div>

                {detail}
            </div>
        </section>
    );
}

export default MiddleBannerForm;