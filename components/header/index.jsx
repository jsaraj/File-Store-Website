"use client"
import Image from "next/image";
import Link from "next/link";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";
import { useState } from "react";



const Header = () => {

    const [rotatePhone, setRotatePhone] = useState(false);
    const [rotateEmail, setRotateEmail] = useState(false);

    return (
        <header className="shadow-sm h-32 py-2">
            <div className="container mx-auto flex justify-between">

                <div className="w-1/12">
                    <Link href={"/"}>
                        <Image
                            src="/logo.png"
                            width={100}
                            height={100}
                            alt="logo"
                            priority={true}
                            className="transition-all duration-200 hover:scale-105"
                        />
                    </Link>
                </div>

                <div className="w-7/12 flex flex-col gap-5 py-2 h-32 px-5">
                    <div>
                        <nav>
                            <ul className="flex gap-6">
                                <Link href={"/"} className="bg-gray-200 text-center w-40 py-2 rounded px-3 transition-all duration-300 hover:bg-orange-300"><li>صفحه اصلی</li></Link>
                                <Link href={"#"} className="bg-gray-200 text-center w-40 py-2 rounded px-3 transition-all duration-300 hover:bg-orange-300"><li>اپلیکیشن</li></Link>
                                <Link href={"#"} className="bg-gray-200 text-center w-40 py-2 rounded px-3 transition-all duration-300 hover:bg-orange-300"><li>طرح های گرافیگی</li></Link>
                                <Link href={"#"} className="bg-gray-200 text-center w-40 py-2 rounded px-3 transition-all duration-300 hover:bg-orange-300"><li>کتاب</li></Link>
                                <Link href={"/blog"} className="bg-gray-200 text-center w-40 py-2 rounded px-3 transition-all duration-300 hover:bg-orange-300"><li>وبلاگ</li></Link>
                            </ul>
                        </nav>
                    </div>
                    <div className="relative shadow-[0px_0px_5px_1px_rgba(0,0,0,0.1)] rounded">
                        <input type="text" placeholder="جستجو کنید" className="py-2 px-4 w-full bg-gray-100 rounded focus:outline-none focus:bg-gray-200" />
                        <BiSearchAlt2 size={30} className="absolute left-2 top-1 opacity-60 cursor-pointer transition-all duration-300 hover:text-orange-300" />
                    </div>
                </div>



                <div className="w-3/12 flex flex-col gap-2 items-end py-2">
                    <div className="flex gap-3" onMouseOver={() => setRotatePhone(true)} onMouseLeave={() => setRotatePhone(false)}>
                        <p className="text-sm pt-1">09181234567</p>
                        <div className=
                            {rotatePhone ? "bg-gray-200 rounded w-6 rotate-[200deg] p-1 transition-all duration-500" : "bg-gray-200 rounded w-6 rotate-[100deg] p-1 transition-all duration-500"}>
                            <FaPhone size={14} />
                        </div>
                    </div>
                    <div className="flex gap-3" onMouseOver={() => setRotateEmail(true)} onMouseLeave={() => setRotateEmail(false)}>
                        <p className="text-sm pt-1">jbrsaraj@gmail</p>
                        <div className=
                            {rotateEmail ? "bg-gray-200 rounded w-6 rotate-[200deg] p-1 transition-all duration-500" : "bg-gray-200 rounded w-6 rotate-[100deg] p-1 transition-all duration-500"}>
                            <IoIosMail size={17} className="rotate-[-100deg]" />
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <Link href={"/account"} className="bg-gray-200 px-3 py-2 rounded cursor-pointer transition-all duration-300 hover:bg-orange-300">
                            <FaUserTie size={20} />
                        </Link>
                        <Link href={"/cart"} className="flex py-2 gap-6 bg-gray-200 px-6 rounded  transition-all duration-300 hover:bg-orange-300  items-center">
                            <p className="rounded-full w-6 h-6 text-center border border-gray-400">0</p>
                            <p>سبد خرید</p>
                            <div>
                                <FaCartShopping size={20} />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </header >
    );
}

export default Header;