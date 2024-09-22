
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowUp } from "react-icons/io";



const Footer = () => {
    return (
        <div className=" container mx-auto mt-10 w-full ">
            <div className="flex justify-between bg-gray-200 py-10 px-5 rounded-md">
                <div className="flex flex-col gap-2 items-center ju">
                    <Link href="/">
                        <Image src="/logo.png" width={100} height={100} alt="logo" />
                    </Link>
                    <p className="text-center text-gray-500 text-base sm:text-sm">این متن ساختگی می باشد <br />این سایت تست می باشد این سایت تست می باشد</p>
                </div>
                <div>
                    <h3 className="pb-2 mb-4 border-b border-orange-400 text-gray-600">دسترسی سریع</h3>
                    <ul className="flex flex-col gap-3">
                        <li><Link href="#" className="flex items-center text-gray-500 text-base sm:text-sm"><IoIosArrowBack />درباره ما</Link></li>
                        <li><Link href="#" className="flex items-center text-gray-500 text-base sm:text-sm"><IoIosArrowBack />وبلاگ</Link></li>
                        <li><Link href="#" className="flex items-center text-gray-500 text-base sm:text-sm"><IoIosArrowBack />حریم خصوصی</Link></li>
                        <li><Link href="#" className="flex items-center text-gray-500 text-base sm:text-sm"><IoIosArrowBack />تماس با ما</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="pb-2 mb-4 border-b border-orange-400 text-gray-600">راهنمای خرید</h3>
                    <ul className="flex flex-col gap-3">
                        <li><Link href="#" className="flex items-center text-gray-500 text-base sm:text-sm"><IoIosArrowBack />سوالات متداول</Link></li>
                        <li><Link href="#" className="flex items-center text-gray-500 text-base sm:text-sm"><IoIosArrowBack />چگونه خرید کنیم؟</Link></li>
                        <li><Link href="#" className="flex items-center text-gray-500 text-base sm:text-sm"><IoIosArrowBack />قوانین استفاده از محصولات</Link></li>
                    </ul>
                </div>
                <div className="flex justify-center items-center gap-5">
                    <Image src="/logo-enemad.png" width={80} height={50} alt="logo enemad" className="cursor-pointer" />
                    <Image src="/logo-samandehi.png" width={80} height={50} alt="logo samandhi" className="cursor-pointer" />
                </div>
            </div>

            <div className="flex justify-between pt-6 pb-3">
                <p>تمامی حقوق این سایت مربوط به وب سایت فایل استور می باشد / طراح: جابر سراج</p>
                <div className="bg-orange-400 justify-center items-center flex rounded-md cursor-pointer hover:bg-orange-500 transition-all duration-200 fixed bottom-4 left-8 z-50 ">
                    <IoIosArrowUp size={40} />
                </div>
            </div>
        </div>


    );
}

export default Footer;
