"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import Box from "./Box";

const AllMidBanner = ({ setMidBanDetail, setRandNnumberForBannerDetail }) => {

    const [banners, setBanners] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    const [numberOfBtn, setnumberOfBtn] = useState([1]);
    const [allMidBannerCount, setallMidBannerCount] = useState(0);
    const paginate = 10;

    useEffect(() => {
        axios.get(`http://localhost:27017/api/middle-banner?pn=${pageNum}&&pgn=${paginate}`)
            .then(d => {
                setBanners(d.data.goalMidBanner);
                setnumberOfBtn(Array.from(Array(Math.ceil(d.data.allGoalMidBan / paginate)).keys()))
                setallMidBannerCount(d.data.allGoalMidBan)
                console.log("ok get all")
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
                <div className="rounded-md border border-orange-400 py-1 px-3 text-center text-orange-500"> تعداد بنرها : {allMidBannerCount} </div>
            </div>
            <div className="flex flex-col gap-5">
                {
                    banners.map((banner, i) => (
                        <Box key={i} data={banner} setMidBanDetail={setMidBanDetail} setRandNnumberForBannerDetail={setRandNnumberForBannerDetail} />
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

export default AllMidBanner;