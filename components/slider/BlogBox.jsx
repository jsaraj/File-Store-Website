

import Image from "next/image";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa6";
import { IoHeart } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";



const BlogBox = ({ data }) => {
    return (
        <Link href={`/blog/${data.slug}`}>
            <div className=" relative w-[350px] sm:h-[450px] h-[480px] bg-zinc-50 rounded-md overflow-hidden hover:-translate-y-2 transition-all duration-200 p-2 ">
                <Image
                    src={data.imageUrl}
                    alt={data.imageAlt}
                    width={360}
                    height={250}
                    className="rounded-md"
                />
                <h4 className="text-center py-4 line-clamp-1">
                    {data.title}
                </h4>

                <p className="text-justify text-base leading-8	sm:text-[14px] line-clamp-3">{data.shortDesc}</p>
                <div className="h-1 bg-purple-300 w-[90%] mx-auto mt-2 rounded-md"></div>
                <div className="flex justify-between items-center absolute bottom-2 left-1 w-full px-3 ">
                    <p className="bg-gray-200 rounded-md py-1 px-3 text-base sm:text-sm">{data.updatesAt}</p>
                    <p className="bg-gray-200 rounded-md py-1 px-3 text-base sm:text-sm">{data.pageView} بازدید</p>
                </div>

            </div>
        </Link>

    );
}

export default BlogBox;