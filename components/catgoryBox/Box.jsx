import Image from "next/image";
import Link from "next/link";

const Box = () => {
    return (
        <Link href="/">
            <div className="bg-gray-200 rounded-md w-80 my-5 flex justify-between p-4 hover:bg-gray-100 transition-all from-amber-200">
                <div className="flex flex-col gap-3">
                    <h3>فایل فوتوشاپ</h3>
                    <p>وکتورهای قدرتمند و لایه باز</p>
                </div>
                <Image src="/images/pic/photoshop.png" width={70} height={70} alt="photoshop" quality={100} />
            </div>
        </Link>
    );
}

export default Box;