"use client"

import { useEffect, useState } from "react";
import DashboardCtrl from "../dashboard-ctrl";
import MiddleBannerForm from "../forms/middleBannerForm";
import SliderForm from "../forms/sliderForm";


const MainDashboard = () => {
    const [contentChanger, setContentChanger] = useState("midBanner")
    const [detail, setDetail] = useState(<MiddleBannerForm />)


    useEffect(() => {
        if (contentChanger == "midBanner") {
            setDetail(<MiddleBannerForm />)
        }
        else if (contentChanger === "sliders") {
            setDetail(<SliderForm />)
        }
    }, [contentChanger])






    console.log(contentChanger)
    return (
        <div className="flex container gap-4 py-10">
            <div className=" w-2/12 rounded-md px-3">
                <DashboardCtrl setContentChanger={setContentChanger} />
            </div>
            <div className="bg-gray-100 w-10/12 rounded-md p-6">
                {detail}
            </div>
        </div>
    );
}

export default MainDashboard;