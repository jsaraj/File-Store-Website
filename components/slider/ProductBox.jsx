import Image from "next/image";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa6";

const ProductBox = () => {
    return (
        <Link href="#">
            <div className=" relative w-80 h-96 bg-zinc-50 shadow-[0px_0px_3px_1px_rgba(0,0,0,0.2)] rounded-md overflow-hidden hover:shadow-[0px_0px_6px_2px_rgba(0,0,0,0.4)] ">
                <Image
                    src="/images/pic/boxPicture.jpg"
                    alt="seagull"
                    width={500}
                    height={333}
                />
                <h4 className="text-center py-2">
                    کتاب جاناتان مرغ دریایی
                </h4>
                <div className="flex justify-between absolute bottom-0 w-full">
                    <p className="bg-gray-200 p-2 rounded-tl-lg ">50000 تومان</p>
                    <span className="bg-gray-200 w-10 h-10 p-2 rounded-tr-lg hover:bg-orange-400 cursor-pointer transition-all duration-200"><FaCartPlus size={25} /></span>
                </div>

            </div>
        </Link>

    );
}

export default ProductBox;