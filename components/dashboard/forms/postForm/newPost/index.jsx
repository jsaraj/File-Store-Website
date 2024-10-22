"use client"

import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const NewPost = () => {

    const titleRef = useRef();
    const slugRef = useRef();
    const shortDescRef = useRef();
    const longDescRef = useRef();
    const imageUrlRef = useRef();
    const imageAltRef = useRef();
    const publishedRef = useRef();
    const tagRef = useRef();
    const [tag, setTag] = useState([]);
    const tagSuber = (e) => {
        if (e.key === "Enter") {
            let tagList = [...tag];
            const data = tagRef.current.value;
            if (data.length > 0) {
                tagList = [...tag, data];
                setTag(tagList);
            }
            tagRef.current.value = "";
        }
    };
    const tagDeleter = (indexToRemove) => {
        setTag(tag.filter((_, index) => index !== indexToRemove));
    };


    const [relPosts, setRelPosts] = useState([-1]);
    useEffect(() => {
        axios.get("http://localhost:27017/api/posts-rel")
            .then(d => {
                setRelPosts(d.data);
            }
            )
            .catch(e => console.log("Error in Rel Posts"))
    }, [])

    const [relPostsMan, setRelPostsMan] = useState([]);
    const postRelManage = (v) => {
        let relManger = [...relPostsMan]
        if (v.target.checked) {
            relManger = [...relManger, v.target.value]
        } else {
            relManger.splice(relPostsMan.indexOf(v.target.value), 1)
        }
        setRelPostsMan(relManger)
    }

    const noKeyEnterSubmmiter = (e) => {
        if (e.key == "Enter") {
            e.preventDefault();
        }
    }

    const submmiter = (e) => {
        e.preventDefault()

        const formData = {
            title: titleRef.current.value,
            slug: slugRef.current.value,
            shortDesc: shortDescRef.current.value,
            longDesc: longDescRef.current.value,
            imageUrl: imageUrlRef.current.value,
            imageAlt: imageAltRef.current.value,
            tags: tag,
            comments: [],
            type: "post",
            realtedPost: relPostsMan,
            pageView: 0,
            published: publishedRef.current.value,
            createdAt: new Date().toLocaleDateString('fa-IR', { hour: '2-digit', minute: '2-digit' }),
            updatesAt: new Date().toLocaleDateString('fa-IR', { hour: '2-digit', minute: '2-digit' })
        }


        axios.post("http://localhost:27017/api/new-post", formData)
            .then(d => {
                toast.success('🦄 پست با موفقیت ایجاد شد', {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
            .catch(e => {
                let message = 'عملیات ناموفق بود'
                if (e.response.data.msg) {
                    message = e.response.data.msg;
                }
                toast.error(message, {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
    }


    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col gap-5  w-full">
                <h2 className="text-center">اضافه کردن پست جدید</h2>
                <div>
                    <form onSubmit={submmiter} onKeyDown={noKeyEnterSubmmiter} className="flex flex-col gap-5">
                        <div className="w-full flex flex-col gap-2">
                            <label >عنوان</label>
                            <input required ref={titleRef} type="text" className=" p-2 outline-none rounded-md w-full border-gray-200 border" />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label >اسلاگ</label>
                            <input required ref={slugRef} type="text" className="inputLtr p-2 outline-none rounded-md w-full border-gray-200 border" />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label >توضیحات کوتاه</label>
                            <textarea rows={3}
                                required ref={shortDescRef}
                                className=" p-2 outline-none rounded-md w-full border-gray-200 border" />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label >توضیحات کامل</label>
                            <textarea rows={10}
                                required ref={longDescRef}
                                className=" p-2 outline-none rounded-md w-full border-gray-200 border" />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label >آدرس عکس</label>
                            <input required ref={imageUrlRef} type="text" className="inputLtr p-2 outline-none rounded-md w-full border-gray-200 border" />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label >آلت عکس</label>
                            <input required ref={imageAltRef} type="text" className="p-2 outline-none rounded-md w-full border-gray-200 border" />
                        </div>
                        <div className=" flex flex-col gap-2">
                            <label>تگ ها</label>
                            <div className="tags w-full flex flex-col gap-4">
                                <div className="input flex gap-2 items-center">
                                    <input
                                        type="text"
                                        onKeyDown={tagSuber}
                                        ref={tagRef}
                                        className=" text-sm outline-none focus:border-indigo-600 rounded border-2 border-zinc-700 bg-transparent w-full p-2"
                                        placeholder="تگ را وارد کنید و اینتر بزنید..."
                                    />
                                </div>
                                <div className="tagResults flex gap-3 justify-start flex-wrap">
                                    {tag.map((t, index) => {
                                        return (
                                            <div
                                                key={t}
                                                className="res flex items-center gap-2 py-1 px-3 rounded-md border border-gray-500"
                                            >
                                                <span className="text-zinc-500 text-sm">
                                                    {t}
                                                </span>
                                                <MdDeleteForever className="cursor-pointer" color="red" onClick={() => {
                                                    tagDeleter(index);
                                                }} />

                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label >پست های مرتبط</label>
                            {
                                relPosts[0] == -1
                                    ? <div className=" flex justify-center items-center p-12">
                                        <Image
                                            alt="loading"
                                            width={40}
                                            height={40}
                                            src={"/loading.gif"}
                                        /></div>
                                    : (relPosts.length < 1)
                                        ? <div> مقاله ای یافت نشد</div>
                                        : (<div className="flex flex-wrap gap-5 items-center">
                                            {
                                                relPosts.map((post, id) => (
                                                    <div key={id}>
                                                        <input type="checkbox" onChange={postRelManage} value={post._id} className="py-3 mx-1" />{post.title}
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        )


                            }
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label >فعال بودن پست</label>
                            <select ref={publishedRef} className="p-2 outline-none rounded-md w-full border-gray-200 border">
                                <option value={true}>انتشار</option>
                                <option value={false}>پیش نویس</option>
                            </select>
                        </div>
                        <input type="submit" value="ارسال" className="py-2 bg-orange-400 cursor-pointer rounded-md text-white" />
                    </form>

                </div>
                <ToastContainer
                    position="top-right"
                    autoClose={4000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </div>
        </div>

    );
}

export default NewPost;