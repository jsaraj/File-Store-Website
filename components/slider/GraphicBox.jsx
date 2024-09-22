import Image from "next/image";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa6";
import { IoHeart } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { AiOutlineFormatPainter } from "react-icons/ai";



const GraphicBox = () => {
    return (
        <Link href="#">
            <div className=" relative w-[355px] h-[520px] bg-zinc-50 rounded-md overflow-hidden hover:-translate-y-2 transition-all duration-200 ">
                <Image
                    src="/images/pic/psdfile.png"
                    alt="seagull"
                    width={350}
                    height={270}
                />
                <h4 className="text-center py-2">
                    فایل گرافیکی یک
                </h4>
                <div className="flex justify-between p-2 bg-gray-100 mb-1">
                    <div className="flex justify-start gap-2">
                        <AiOutlineFormatPainter size={20} />
                        <p>فرمت</p>
                    </div>
                    <div>
                        <p>PSD</p>
                    </div>
                </div>
                <div className="flex justify-between p-2 bg-gray-100 mb-1">
                    <div className="flex justify-start gap-2">
                        <AiOutlineFormatPainter size={20} />
                        <p>سایز</p>
                    </div>
                    <div>
                        <p>100*200</p>
                    </div>
                </div>
                <div className="flex justify-between p-2 bg-gray-100 ">
                    <div className="flex justify-start gap-2">
                        <AiOutlineFormatPainter size={20} />
                        <p>حجم</p>
                    </div>
                    <div>
                        <p>10 مگ</p>
                    </div>
                </div>
                <div className="pt-3 flex flex-wrap">
                    <span className="text-center text-base sm:text-sm bg-gray-200 h-8 py-1 px-3 m-1 rounded-sm"> وکتور </span>
                    <span className="text-center text-base sm:text-sm bg-gray-200 h-8 py-1 px-3 m-1 rounded-sm">فتوشاپ</span>
                    <span className="text-center text-base sm:text-sm bg-gray-200 h-8 py-1 px-3 m-1 rounded-sm">ایلیستریتور</span>

                </div>
                <div className="flex justify-between absolute bottom-0 w-full">
                    <p className="bg-gray-200 p-2 rounded-tl-lg ">30000 تومان</p>
                    <div className="flex gap-2">
                        <span className="bg-gray-200 w-10 h-10 p-2 rounded-t-lg hover:bg-orange-400 cursor-pointer transition-all duration-200"><IoMdSearch size={25} /></span>
                        <span className="bg-gray-200 w-10 h-10 p-2 rounded-t-lg hover:bg-orange-400 cursor-pointer transition-all duration-200"><IoHeart size={25} /></span>
                        <span className="bg-gray-200 w-10 h-10 p-2 rounded-tr-lg hover:bg-orange-400 cursor-pointer transition-all duration-200"><FaCartPlus size={25} /></span>
                    </div>

                </div>

            </div>
        </Link>

    );
}

export default GraphicBox;