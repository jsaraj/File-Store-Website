"use client"

import { useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewMidBanner = () => {

    const imageUrlRef = useRef();
    const imageAltRef = useRef();
    const imageLinkRef = useRef();
    const imageStatusRef = useRef();

    const submmiter = (e) => {
        e.preventDefault()

        const formData = {
            imageUrl: imageUrlRef.current.value,
            imageAlt: imageAltRef.current.value,
            imageLink: imageLinkRef.current.value,
            imageStatus: imageStatusRef.current.value,
            publishDate: new Date().toLocaleDateString('fa-IR', { hour: '2-digit', minute: '2-digit' })

        }


        axios.post("http://localhost:27017/api/new-middle-banner", formData)
            .then(d => {
                toast.success('🦄 بنر با موفقیت ایجاد شد', {
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
            <div className="flex flex-col gap-5 sm:w-6/12 w-full">
                <h2 className="text-center">اضافه کردن بنر جدید</h2>
                <div>
                    <form onSubmit={submmiter} className="flex flex-col gap-5">
                        <div className="w-full flex flex-col gap-2">
                            <label >آدرس عکس</label>
                            <input required ref={imageUrlRef} type="text" className="inputLtr p-2 outline-none rounded-md w-full border-gray-200 border" />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label >آلت عکس</label>
                            <input required ref={imageAltRef} type="text" className="p-2 outline-none rounded-md w-full border-gray-200 border" />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label >لینک عکس</label>
                            <input required ref={imageLinkRef} type="text" className="inputLtr p-2 outline-none rounded-md w-full border-gray-200 border" />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label >فعال بودن عکس</label>
                            <select ref={imageStatusRef} className="p-2 outline-none rounded-md w-full border-gray-200 border">
                                <option value={true}>روشن</option>
                                <option value={false}>خاموش</option>
                            </select>
                        </div>
                        <input type="submit" value="ارسال" className="py-2 bg-orange-400 cursor-pointer rounded-md text-white" />
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

export default NewMidBanner;