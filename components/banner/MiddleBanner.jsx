

import Image from "next/image";
import Link from "next/link";


const getData = async () => {
    const data = await fetch("http://localhost:27017/api/get-active-middle-banner")
    return data.json();
}



const MiddleBanner = async () => {

    const data = await getData();

    return (

        <div className="container py-10 flex gap-10 flex-wrap">
            {
                data.map((banner, id) => (
                    <div className="hover:rotate-2 transition-all duration-200 w-[48%]">
                        <Link key={id} href={banner.imageLink}>
                            <Image
                                src={banner.imageUrl}
                                alt={banner.imageAlt}
                                height={488}
                                width={1400}
                                className="rounded-md"
                                quality="100" />
                        </Link>
                    </div>
                ))
            }
        </div>
    );
}

export default MiddleBanner;