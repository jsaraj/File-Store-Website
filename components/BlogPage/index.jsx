"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import BlogBox from "../slider/BlogBox";

const BlogPage = () => {

    const [posts, setposts] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    const [numberOfBtn, setnumberOfBtn] = useState([1]);
    const [BlogPageCount, setBlogPageCount] = useState(0);
    const paginate = 12;

    useEffect(() => {
        axios.get(`http://localhost:27017/api/get-blog-page?pn=${pageNum}&pgn=${paginate}`)
            .then(d => {
                setposts(d.data.goalPost);
                setnumberOfBtn(Array.from(Array(Math.ceil(d.data.allGoalPost / paginate)).keys()))
                setBlogPageCount(d.data.allGoalPost)
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
            
            <div className="flex gap-5 justify-start flex-wrap">
                {
                    posts.map((post, i) => (
                        <BlogBox key={i} data={post} />
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

export default BlogPage;