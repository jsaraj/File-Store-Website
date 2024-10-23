"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import Box from "./Box";

const AllMainSlider = ({ setMainSliderDetail, setRandNnumberForBannerDetail }) => {

    const [banners, setBanners] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    const [numberOfBtn, setnumberOfBtn] = useState([1]);
    const [allMainSliderCount, setallMainSliderCount] = useState(0);
    const paginate = 10;

    useEffect(() => {
        axios.get(`http://localhost:27017/api/main-slider?pn=${pageNum}&&pgn=${paginate}`)
            .then(d => {
                setBanners(d.data.goalMainSlider);
                setnumberOfBtn(Array.from(Array(Math.ceil(d.data.allGoalMainSlider / paginate)).keys()))
                setallMainSliderCount(d.data.allGoalMainSlider)
                console.log("ok get all main Slider")
            })
            .catch(e => console.log(e))
    }, [pageNum])


    const goTopCtrl = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="flex flex-col gap-10">
            <div className="flex justify-end items-center ">
                <div className="rounded-md border border-orange-400 py-1 px-3 text-center text-orange-500"> تعداد بنرها : {allMainSliderCount} </div>
            </div>
            <div className="flex flex-col gap-5">
                {

                    banners.map((banner, i) => (
                        <Box key={i} data={banner} setMainSliderDetail={setMainSliderDetail} setRandNnumberForBannerDetail={setRandNnumberForBannerDetail} />
                    ))
                }
            </div>

            <div className="flex justify-center items-center gap-3">
                {
                    numberOfBtn.map((da, i) => (
                        <button className="bg-orange-400 py-1 px-2 rounded" key={i} onClick={() => {
                            setPageNum(da + 1);
                            goTopCtrl();
                        }}>{da + 1}</button>
                    ))
                }

            </div>
        </div>
    );
}

export default AllMainSlider;