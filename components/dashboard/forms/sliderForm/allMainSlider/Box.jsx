
import Image from "next/image";

const Box = ({ data, setMainSliderDetail, setRandNnumberForBannerDetail }) => {
    return (
        <div onClick={() => {
            setRandNnumberForBannerDetail(Math.random)
            setMainSliderDetail(data._id)
        }} className="flex gap-10 justify-between relative border border-gray-200 p-2 rounded-md overflow-hidden cursor-pointer hover:scale-[101%] transition-all duration-200">
            <div>
                {
                    <Image src={data.imageSrc} width={251} height={150} alt={data.imageAlt} className="rounded" />
                }
            </div>
            <div className="flex gap-4 absolute bottom-0 left-0 ">
                <div>
                    {
                        data.imageStatus ? <p className="rounded-t bg-green-300 py-1 px-3">روشن</p> : <p className="rounded-t bg-rose-300 py-1 px-3">خاموش</p>
                    }
                </div>
                <div className="bg-rose-300 py-1 px-3 rounded-tr-md">
                    {
                        data.publishDate
                    }
                </div>

            </div>
        </div>
    );
}

export default Box;