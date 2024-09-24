
import { BiSearchAlt2 } from "react-icons/bi";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";


const ShopAside = () => {
    return (
        <div className="mt-14 flex flex-col gap-5 ">

            <div className="flex justify-center items-center gap-2 h-14 bg-orange-400 rounded-md text-white cursor-pointer">
                <p>قیمت:</p><p>1000 تومان</p><p>اضافه به سبد خرید</p>
            </div>
            <div className="flex justify-center items-center gap-2 h-14 bg-orange-400 rounded-md text-white cursor-pointer">
                <p>اضافه کردن به علاقمندی ها</p>
            </div>
            <div className="flex flex-col gap-8 bg-gray-100 p-3 rounded-md border border-gray-200 w-full">
                <div className="flex justify-between">
                    <span>تعداد خرید</span>
                    <span>2000</span>
                </div>
                <div className="flex justify-between">
                    <span>تعداد بازدید</span>
                    <span>1000</span>
                </div>
                <div className="flex justify-between">
                    <span>تعداد دیدگاه</span>
                    <span>3000</span>
                </div>
            </div>
            <div className="bg-gray-100 p-3 rounded-md border border-gray-200">
                <h3 className="border-b border-orange-400 py-2 mb-3">معرفی کوتاه محصول</h3>
                <p className="text-justify leading-9">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
                </p>
            </div>
            <div className="bg-gray-100 p-3 rounded-md border border-gray-200">
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
            <div className="bg-gray-100 p-3 rounded-md border border-gray-200 ">
                <h3 className="border-b border-orange-400 py-2 mb-3">برچسب ها</h3>
                <div className="flex gap-2 flex-wrap">
                    <Link href={"/"} className="py-1 px-2 bg-gray-200 border border-gray-300 rounded-md">محصول یک</Link>
                    <Link href={"/"} className="py-1 px-2 bg-gray-200 border border-gray-300 rounded-md">فتوشاپ</Link>
                    <Link href={"/"} className="py-1 px-2 bg-gray-200 border border-gray-300 rounded-md">فایل</Link>
                    <Link href={"/"} className="py-1 px-2 bg-gray-200 border border-gray-300 rounded-md">فایل</Link>
                    <Link href={"/"} className="py-1 px-2 bg-gray-200 border border-gray-300 rounded-md">فایل</Link>
                    <Link href={"/"} className="py-1 px-2 bg-gray-200 border border-gray-300 rounded-md">فایل</Link>
                    <Link href={"/"} className="py-1 px-2 bg-gray-200 border border-gray-300 rounded-md">فایل</Link>
                </div>
            </div>

        </div>
    );
}

export default ShopAside;