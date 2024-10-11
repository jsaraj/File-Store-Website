"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import Box from "./Box";

const AllPosts = ({ setPostDetail, setRandNnumberForPostDetail, setPostdeSlug }) => {

    const [posts, setposts] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    const [numberOfBtn, setnumberOfBtn] = useState([1]);
    const [AllPostsCount, setAllPostsCount] = useState(0);
    const paginate = 10;

    useEffect(() => {
        axios.get(`http://localhost:27017/api/posts?pn=${pageNum}&&pgn=${paginate}`)
            .then(d => {
                setposts(d.data.goalPost);
                setnumberOfBtn(Array.from(Array(Math.ceil(d.data.allGoalPost / paginate)).keys()))
                setAllPostsCount(d.data.allGoalPost)
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
                <div className="rounded-md border border-orange-400 py-1 px-3 text-center text-orange-500"> تعداد بنرها : {AllPostsCount} </div>
            </div>
            <div className="flex flex-col gap-5">
                {
                    posts.map((post, i) => (
                        <Box key={i} data={post} setPostdeSlug={setPostdeSlug} setPostDetail={setPostDetail} setRandNnumberForPostDetail={setRandNnumberForPostDetail} />
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

export default AllPosts;