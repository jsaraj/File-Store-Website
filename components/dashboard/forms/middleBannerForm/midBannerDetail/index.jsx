"use client"

import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

        const url = `http://localhost:27017/api/update-middle-banner/${midBanDetail}`;
        axios.post(url, formData)
            .then(d => {
                toast.success('🦄 بنر با موفقیت بروزرسانی شد', {
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



    const deleter = () => {

        const url = `http://localhost:27017/api/delete-middle-banner/${midBanDetail}`;
        axios.post(url)
            .then(d => {
                toast.success('🦄 بنر با موفقیت حذف شد', {
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
                toast.error('🦄 عملیات ناموفق بود', {
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
                    <button onClick={() => deleter()} className="py-1 px-3 bg-rose-400 rounded-md text-white ">حذف</button>
                </div>

                <div>
                    <form onSubmit={submmiter} className="flex flex-col gap-5">
                        <div className="w-full flex flex-col gap-2">
                            <label >آدرس جدید عکس</label>
                            <input required defaultValue={imageUrl} ref={imageUrlRef} type="text" className="inputLtr p-2 outline-none rounded-md w-full border-gray-200 border" />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label >آلت جدید عکس</label>
                            <input required defaultValue={imageAlt} ref={imageAltRef} type="text" className="p-2 outline-none rounded-md w-full border-gray-200 border" />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label >لینک جدید عکس</label>
                            <input required defaultValue={imageLink} ref={imageLinkRef} type="text" className="inputLtr p-2 outline-none rounded-md w-full border-gray-200 border" />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label >فعال بودن عکس</label>
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
        </div>

    );
}

export default MidBannerDetail;