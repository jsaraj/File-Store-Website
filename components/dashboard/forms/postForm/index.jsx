"use client"

import { useEffect, useState } from "react";
import AllPosts from "./allPost";
import NewMidBanner from "./newPost";
import MidBannerDetail from "./postDetail";


const PostForm = () => {

    const [midBanDetail, setMidBanDetail] = useState("");
    const [randNnumberForBannerDetail, setRandNnumberForBannerDetail] = useState(1)
    const [detail, setDetail] = useState(<AllPosts setMidBanDetail={setMidBanDetail} setRandNnumberForBannerDetail={setRandNnumberForBannerDetail} />)


    useEffect(() => {
        if (midBanDetail != "") {
            setDetail(<MidBannerDetail midBanDetail={midBanDetail} />)
        }
    }, [randNnumberForBannerDetail])



    return (
        <section className="flex flex-col gap-8 ">
            <div className="flex justify-between ">
                <div>
                    <h3>پست ها</h3>
                </div>
                <div className="flex gap-5 items-center">

                    <button onClick={() => setDetail(<AllPosts setMidBanDetail={setMidBanDetail} setRandNnumberForBannerDetail={setRandNnumberForBannerDetail} />)} className=" px-3 py-1 rounded-md bg-orange-400 border text-white hover:bg-opacity-0 hover:border hover:border-orange-400 hover:text-orange-500 transition-all duration-200">همه</button>


                    <button onClick={() => setDetail(<NewMidBanner />)} className=" px-3 py-1 rounded-md bg-orange-400 border text-white hover:bg-opacity-0 hover:border hover:border-orange-400 hover:text-orange-500 transition-all duration-200">جدید</button>

                </div>
            </div>
            <div>

                {detail}
            </div>
        </section>
    );
}

export default PostForm;