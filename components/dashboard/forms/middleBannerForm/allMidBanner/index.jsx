"use client"
import axios from "axios";
import { use, useEffect, useState } from "react";
import Box from "./Box";

const AllMidBanner = () => {

    const [banners, setBanners] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    const [numberOfBtn, setnumberOfBtn] = useState([1]);

    useEffect(() => {
        axios.get(`https://sarajfileshop.liara.run/api/middle-banner?pn=${pageNum}`)
            .then(d => {
                setBanners(d.data.goalMidBanner);
                setnumberOfBtn(Array.from(Array(Math.ceil(d.data.allGoalMidBan / 2)).keys()))
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
            <div className="flex flex-col gap-5">
                {
                    banners.map((banner, i) => (
                        <Box key={i} data={banner} />
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