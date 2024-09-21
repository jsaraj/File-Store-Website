import Image from "next/image";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa6";
import { IoHeart } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";



const ProductBox = () => {
    return (
        <Link href="#">
            <div className=" relative w-[340px] h-[450px] bg-zinc-50 rounded-md overflow-hidden hover:-translate-y-2 transition-all duration-200 ">
                <Image
                    src="/images/pic/box-app-slider.jpg"
                    alt="seagull"
                    width={500}
                    height={333}
                />
                <h4 className="text-center py-2">
                    کتاب جاناتان مرغ دریایی
                </h4>
                <div className="pt-3 flex flex-wrap">
                    <span className="text-center bg-gray-300 h-8 py-1 px-3 m-1 rounded-sm"> رمان </span>
                    <span className="text-center bg-gray-300 h-8 py-1 px-3 m-1 rounded-sm">درام</span>
                    <span className="text-center bg-gray-300 h-8 py-1 px-3 m-1 rounded-sm">انگیزشی</span>
                   
                </div>
                <div className="flex justify-between absolute bottom-0 w-full">
                    <p className="bg-gray-200 p-2 rounded-tl-lg ">50000 تومان</p>
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

export default ProductBox;