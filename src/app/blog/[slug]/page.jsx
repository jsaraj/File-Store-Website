import BreadCrumb from "../../../../components/BreadCrumb";
import Image from "next/image";
import { FaRegEye, FaRegCommentDots } from "react-icons/fa";
import { IoCalendarNumberOutline } from "react-icons/io5";
import BlogRelatedSlider from "../../../../components/slider/BlogRelatedSlider";
import BlogAside from "./ShopAside";

const getData = async (slug) => {
    const data = await fetch(`http://localhost:27017/api/get-single-post/${slug}`);
    return data.json();
}

const SingleBlog = async ({ params }) => {

    const data = await getData(params.slug);
    return (
        <>
            <div className=" container">
                <BreadCrumb secondTitle="بلاگ" secondLink="/blog" title={data.title} />
            </div>
            <div className="flex justify-between container gap-7">

                <section className="flex flex-col gap-5 justify-start sm:w-9/12 w-full">
                    <Image
                        src={data.imageUrl}
                        width={1100}
                        height={600}
                        alt={data.imageAlt}
                        quality={100}
                        className="rounded-md"
                    />
                    <h2>{data.title}</h2>
                    <div className="flex gap-3 text-base sm:text-sm border-b border-orange-400 pb-4">
                        <div className="bg-gray-200 py-1 flex gap-2 items-center justify-center rounded-md w-32">
                            <FaRegEye color="orange" size={20} />
                            <p>بازدید:</p>
                            <span>{data.pageView}</span>
                        </div>
                        <div className="bg-gray-200 py-1 flex gap-2 items-center justify-center rounded-md w-32">
                            <FaRegCommentDots color="orange" size={20} />
                            <p>دیدگاه:</p>
                            <span>500</span>
                        </div>
                        <div className="bg-gray-200 py-1 flex gap-2 items-center justify-center rounded-md w-32">
                            <IoCalendarNumberOutline color="orange" size={20} />
                            <span>{data.updatesAt}</span>
                        </div>
                    </div>
                    <div>
                        <p className="text-justify leading-10">{data.longDesc}</p>
                    </div>
                    <div>
                        <BlogRelatedSlider title="مقالات مرتبط" />
                    </div>
                    <div className="h-96 w-full rounded-md p-4 border">
                        <h2 className='mb-5 border-r-2 pr-3 border-gray-200'>دیدگاه ها</h2>
                    </div>
                </section>
                <div className="sm:2/12 w-full">
            
                    <BlogAside shortDesc={data.shortDesc} tags={data.tags} />
                </div>
            </div>
        </>
    );
}

export default SingleBlog;