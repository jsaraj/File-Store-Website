import Image from "next/image";
import Link from "next/link";

const MiddleBanner = () => {
    return (
        <div className="flex gap-5 m-16">
            <Link href="#"><Image src="/images/pic/banner1.jpg" alt="Banner1" height={481} width={1380} className="rounded-md" quality="100"/></Link>
            <Link href="#"><Image src="/images/pic/banner2.jpg" alt="Banner1" height={481} width={1380} className="rounded-md" quality="100"/></Link>
        </div>
    );
}

export default MiddleBanner;