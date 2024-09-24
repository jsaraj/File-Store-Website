import BreadCrumb from "../../../../components/BreadCrumb";
import Image from "next/image";
import { AiFillProduct } from "react-icons/ai";
import { SiAdguard } from "react-icons/si";
import { MdOutlineSupportAgent } from "react-icons/md";

import BlogRelatedSlider from "../../../../components/slider/BlogRelatedSlider";
import { IoResizeSharp, IoSaveOutline } from "react-icons/io5";
import { AiOutlineFormatPainter } from "react-icons/ai";

const SingleProduct = () => {
    return (
        <>
            <div className="">
                <BreadCrumb secondTitle="فروشگاه" secondLink="/shop" title="اولین محصول من" />
            </div>
            <section className="flex flex-col gap-5">
                <div className=" border p-4 rounded-md flex gap-10">
                    <Image
                        src="/images/pic/box-app-slider.jpg"
                        width={400}
                        height={300}
                        alt="اولین مقاله من"
                        quality={100}
                        className="rounded-md"
                    />
                    <div className="flex flex-col gap-5 w-full">
                        <h2 className="line-clamp-1">اولین محصول من</h2>
                        <div className="bg-gray-100 border border-gray-200 p-2 rounded-md">
                            <div className="flex justify-between p-2 gap-10 mb-1 text-base">
                                <div className="flex justify-start gap-2">
                                    <AiOutlineFormatPainter size={20} />
                                    <p>فرمت</p>
                                </div>
                                <div>
                                    <p>PSD</p>
                                </div>
                            </div>
                            <div className="flex justify-between p-2 gap-10 mb-1">
                                <div className="flex justify-start gap-2 text-base">
                                    <IoResizeSharp size={20} />
                                    <p>سایز</p>
                                </div>
                                <div>
                                    <p>100*200</p>
                                </div>
                            </div>
                            <div className="flex justify-between p-2 gap-10 text-base ">
                                <div className="flex justify-start gap-2">
                                    <IoSaveOutline size={20} />
                                    <p>حجم</p>
                                </div>
                                <div>
                                    <p>10 مگ</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="flex justify-between">
                    <div className="flex justify-center bg-gray-100 p-5 rounded-md items-center gap-4 border-gray-200 border w-80" >
                        <AiFillProduct size={75} color="orange" />
                        <div className="flex flex-col gap-4 items-center justify-center">
                            <h3>محصولات ارجینال</h3>
                            <p className="text-base sm:text-sm">برترین های حوزه وب</p>
                        </div>
                    </div>
                    <div className="flex justify-center bg-gray-100 p-5 rounded-md items-center gap-4 border-gray-200 border w-80" >
                        <SiAdguard size={65} color="orange" />
                        <div className="flex flex-col gap-4 items-center justify-center">
                            <h3>بالاترین کیفیت</h3>
                            <p className="text-base sm:text-sm">تاثیرگذارترین مورد در موفقیت</p>
                        </div>
                    </div>
                    <div className="flex justify-center bg-gray-100 p-5 rounded-md items-center gap-4 border-gray-200 border w-80" >
                        <MdOutlineSupportAgent size={75} color="orange" />
                        <div className="flex flex-col gap-4 items-center justify-center">
                            <h3>پشتیبانی سریع</h3>
                            <p className="text-base sm:text-sm">کمتر از چند دقیقه</p>
                        </div>
                    </div>
                </div>

                <div className="border flex flex-col gap-3 border-gray-200 rounded-md p-5">
                    <h2>خلاصه توضیحات محصول</h2>
                    <p className="text-justify leading-[45px]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                </div>
                <div>
                    <BlogRelatedSlider title="محصولات مرتبط" />
                </div>
                <div className="h-96 w-full rounded-md p-4 border">
                    <h2 className='mb-5 border-r-2 pr-3 border-gray-200'>دیدگاه ها</h2>
                </div>
            </section>
        </>

    );
}

export default SingleProduct;