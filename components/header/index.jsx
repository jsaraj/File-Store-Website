import Image from "next/image";
import Link from "next/link";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";



const Header = () => {
    return (
        <header className=" shadow-[0px_1px_10px_rgba(0,0,0,0.2)] h-32 py-2">
            <div className="container flex justify-center">


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



                <div className="w-7/12 flex flex-col gap-4 py-2 h-32 px-5">
                    <div>
                        <nav>
                            <ul className="flex gap-6">
                                <Link href={"/"} className="bg-gray-200 py-2 rounded px-3 transition-all duration-300 hover:bg-orange-300"><li>صفحه اصلی</li></Link>
                                <Link href={"#"} className="bg-gray-200 py-2 rounded px-3 transition-all duration-300 hover:bg-orange-300"><li>بازی کامپیوتری</li></Link>
                                <Link href={"#"} className="bg-gray-200 py-2 rounded px-3 transition-all duration-300 hover:bg-orange-300"><li>طرح های گرافیگی</li></Link>
                                <Link href={"#"} className="bg-gray-200 py-2 rounded px-3 transition-all duration-300 hover:bg-orange-300"><li>وبلاگ</li></Link>
                            </ul>
                        </nav>
                    </div>
                    <div className="relative">
                        <input type="text" placeholder="جستجو کنید" className="p-3 w-full bg-gray-100 rounded focus:outline-none focus:bg-gray-200" />
                        <BiSearchAlt2 size={30} className="absolute left-2 top-2 opacity-60 cursor-pointer transition-all duration-300 hover:text-orange-300" />
                    </div>
                </div>



                <div className="w-3/12 flex flex-col gap-2 items-end py-2">
                    <div className="flex gap-3">
                        <p className="text-sm pt-1">09181234567</p>
                        <div className="bg-gray-200 rounded w-6 rotate-[100deg] p-1">
                            <FaPhone size={14} />
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <p className="text-sm pt-1">jbrsaraj@gmail</p>
                        <div className="bg-gray-200 rounded w-6 rotate-[100deg] p-1">
                            <IoIosMail size={17} className="rotate-[-100deg]" />
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div className="bg-gray-200 px-3 py-2 rounded cursor-pointer transition-all duration-300 hover:bg-orange-300">
                            <FaUserTie size={20} />
                        </div>
                        <div className="flex gap-6 bg-gray-200 px-6 rounded cursor-pointer transition-all duration-300 hover:bg-orange-300 py-2">
                            <p className="rounded-full w-6 h-6 text-center border border-gray-400">0</p>
                            <p>سبد خرید</p>
                            <div>
                                <FaCartShopping size={20}  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    );
}

export default Header;