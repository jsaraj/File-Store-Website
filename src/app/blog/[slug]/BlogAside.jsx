
import { BiSearchAlt2 } from "react-icons/bi";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

const getData = async () => {
    const data = await fetch(`http://localhost:27017/api/get-most-view-blog`);
    return data.json();
}

const BlogAside = async ({ shortDesc, tags }) => {

    const data = await getData();
    console.log(data)

    return (
        <div className=" flex flex-col gap-5 ">

            <form className="flex items-center px-3 bg-gray-100 rounded-md justify-between">
                <input type="text" placeholder="جستجو" className="outline-none py-3 bg-gray-100 w-full"></input>
                <BiSearchAlt2 size={20} className="cursor-pointer" />
            </form>
            <div className="bg-gray-100 p-3 rounded-md">
                <h3 className="border-b border-orange-400 py-2 mb-3">خلاصه متن</h3>
                <p className="text-justify leading-8">{shortDesc}</p>
            </div>
            <div className="bg-gray-100 p-3 rounded-md">
                <h3 className="border-b border-orange-400 py-2 mb-3">پربازدید ترین مقالات</h3>
                <ul className="flex flex-col gap-4">
                    {
                        data.map((da, i) => (
                            <li key={i}>
                                <Link href={da.slug} className="flex gap-1 items-center hover:-translate-x-2 transition-all duration-200"><IoIosArrowBack /> {da.title}</Link>
                            </li>
                        ))
                    }
                </ul>

            </div>
            <div className="bg-gray-100 p-3 rounded-md">
                <h3 className="border-b border-orange-400 py-2 mb-3">پرفروش ترین محصولات</h3>
                <ul className="flex flex-col gap-4">
                    <li>
                        <Link href={"/"} className="flex gap-1 items-center hover:-translate-x-2 transition-all duration-200"><IoIosArrowBack />محصول اول من</Link>
                    </li>
                    <li>
                        <Link href={"/"} className="flex gap-1 items-center hover:-translate-x-2 transition-all duration-200"><IoIosArrowBack />محصول دوم من</Link>
                    </li>
                    <li>
                        <Link href={"/"} className="flex gap-1 items-center hover:-translate-x-2 transition-all duration-200"><IoIosArrowBack />محصول سوم من</Link>
                    </li>
                    <li>
                        <Link href={"/"} className="flex gap-1 items-center hover:-translate-x-2 transition-all duration-200"><IoIosArrowBack />محصول چهارم من</Link>
                    </li>
                </ul>
            </div>
            <div className="bg-gray-100 p-3 rounded-md">
                <h3 className="border-b border-orange-400 py-2 mb-3">خلاصه متن</h3>
                <p className="text-justify leading-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
            </div>

            <div className="bg-gray-100 p-3 rounded-md border border-gray-200 ">
                <h3 className="border-b border-orange-400 py-2 mb-3">برچسب ها</h3>
                <div className="flex gap-2 flex-wrap">
                    {
                        tags.map((tag, id) => (
                            <Link key={id} href={"/"} className="py-1 px-2 bg-gray-200 border border-gray-300 rounded-md">{tag}</Link>
                        ))
                    }

                </div>
            </div>
        </div>
    );
}

export default BlogAside;