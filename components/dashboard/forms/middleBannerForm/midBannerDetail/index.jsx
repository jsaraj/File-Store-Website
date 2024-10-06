"use client"

import { useEffect, useRef, useState } from "react";
import axios from "axios";


const MidBannerDetail = ({ midBanDetail }) => {
    const imageUrlRef = useRef();
    const imageAltRef = useRef();
    const imageLinkRef = useRef();
    const imageStatusRef = useRef();

    const submmiter = (e) => {
        e.preventDefault()

        const formData = {
            goalId: midBanDetail,
            imageUrl: imageUrlRef.current.value,
            imageAlt: imageAltRef.current.value,
            imageLink: imageLinkRef.current.value,
            imageStatus: imageStatusRef.current.value,
            publishDate: new Date().toLocaleDateString("fa-IR", {
                hour: "2-digit",
                minute: "2-digit",
            }),

        }

        const url = `http://localhost:27017/api/update-middle-banner`;
        axios.post(url, formData)
            .then(d => console.log("ok"))
            .catch(e => console.log(e))
    }



    const deleter = () => {

        const formData = {
            goalId: midBanDetail,
        }

        const url = `http://localhost:27017/api/delete-middle-banner`;
        axios.post(url, formData)
            .then(d => console.log("ok Delete"))
            .catch(e => console.log(e))
    }


    const [imageUrl, setImageUrl] = useState("");
    const [imageAlt, setImageAlt] = useState("");
    const [imageLink, setImageLink] = useState("");
    const [imageStatus, setImageStatus] = useState();


    useEffect(() => {
        axios.get(`http://localhost:27017/api/get-single-middle-banner/${midBanDetail}`)
            .then(d => {
                setImageUrl(d.data.imageUrl),
                    setImageAlt(d.data.imageAlt),
                    setImageLink(d.data.imageLink),
                    setImageStatus(d.data.imageStatus)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])

    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col gap-5 sm:w-6/12 w-full">
                <div className="flex justify-between items-center">
                    <h2>جزییات بنر</h2>
                    <button onClick={() => deleter()} className="py-1 px-3 bg-rose-400 rounded-md text-white ">حذف بنر</button>
                </div>

                <div>
                    <form onSubmit={submmiter} className="flex flex-col gap-5">
                        <div className="w-full flex flex-col gap-2">
                            <label className="">آدرس جدید عکس</label>
                            <input defaultValue={imageUrl} ref={imageUrlRef} type="text" className="p-2 outline-none rounded-md w-full border-gray-200 border" />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label className="">آلت جدید عکس</label>
                            <input defaultValue={imageAlt} ref={imageAltRef} type="text" className="p-2 outline-none rounded-md w-full border-gray-200 border" />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label className="">لینک جدید عکس</label>
                            <input defaultValue={imageLink} ref={imageLinkRef} type="text" className="p-2 outline-none rounded-md w-full border-gray-200 border" />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label className="">فعال بودن عکس</label>
                            <select ref={imageStatusRef} className="p-2 outline-none rounded-md w-full border-gray-200 border">
                                {
                                    imageStatus ?
                                        <>
                                            <option value={true}>روشن</option>
                                            <option value={false}>خاموش</option>
                                        </> :
                                        <>
                                            <option value={false}>خاموش</option>
                                            <option value={true}>روشن</option>
                                        </>

                                }
                            </select>
                        </div>
                        <input type="submit" value="بروزرسانی" className="py-2 bg-orange-400 cursor-pointer rounded-md text-white" />
                    </form>
                </div>
            </div>
        </div>

    );
}

export default MidBannerDetail;