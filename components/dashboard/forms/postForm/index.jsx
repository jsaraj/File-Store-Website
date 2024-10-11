"use client"

import { useEffect, useState } from "react";
import AllPosts from "./allPost";
import NewPost from "./newPost";
import PostDetail from "./postDetail";


const PostForm = () => {

    const [postDetail, setPostDetail] = useState("");
    const [postDeSlug, setPostdeSlug] = useState("");
    const [randNnumberForPostDetail, setRandNnumberForPostDetail] = useState(1)
    const [detail, setDetail] = useState(<AllPosts setPostDetail={setPostDetail} setPostdeSlug={setPostdeSlug} setRandNnumberForPostDetail={setRandNnumberForPostDetail} />)


    useEffect(() => {
        if (postDetail != "") {
            setDetail(<PostDetail postDetail={postDetail} postDeSlug={postDeSlug} />)
        }
    }, [randNnumberForPostDetail])



    return (
        <section className="flex flex-col gap-8 ">
            <div className="flex justify-between ">
                <div>
                    <h3>پست ها</h3>
                </div>
                <div className="flex gap-5 items-center">

                    <button onClick={() => setDetail(<AllPosts setPostDetail={setPostDetail} setPostdeSlug={setPostdeSlug} setRandNnumberForPostDetail={setRandNnumberForPostDetail} />)} className=" px-3 py-1 rounded-md bg-orange-400 border text-white hover:bg-opacity-0 hover:border hover:border-orange-400 hover:text-orange-500 transition-all duration-200">همه</button>


                    <button onClick={() => setDetail(<NewPost />)} className=" px-3 py-1 rounded-md bg-orange-400 border text-white hover:bg-opacity-0 hover:border hover:border-orange-400 hover:text-orange-500 transition-all duration-200">جدید</button>

                </div>
            </div>
            <div>

                {detail}
            </div>
        </section>
    );
}

export default PostForm;