

import Image from "next/image";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa6";
import { IoHeart } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";



const BlogBoxRelated = () => {
    return (
        <Link href="#">
            <div className=" relative w-[245px] sm:h-[400px] h-[480px] bg-zinc-50 rounded-md overflow-hidden hover:-translate-y-2 transition-all duration-200 p-2 border ">
                <Image
                    src="/images/pic/blog.jpg"
                    alt="seagull"
                    width={360}
                    height={250}
                    className="rounded-md"
                />
                <h4 className="text-center py-4 line-clamp-1">
                    اولین مقاله من
                </h4>
                
                <p className="text-justify text-base leading-8	sm:text-[13px] line-clamp-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                <div className="h-1 bg-purple-300 w-[90%] mx-auto mt-2 rounded-md"></div>
                <div className="flex justify-between items-center absolute bottom-2 left-1 w-full px-3 ">
                    <p className="bg-gray-200 rounded-md py-1 px-3 text-base sm:text-xs">1403/07/01</p>
                    <p className="bg-gray-200 rounded-md py-1 px-3 text-base sm:text-xs">200 دیدگاه</p>
                </div>

            </div>
        </Link>

    );
}

export default BlogBoxRelated;