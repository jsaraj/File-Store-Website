
import Image from "next/image";

const Box = ({ data, setPostdeSlug, setPostDetail, setRandNnumberForPostDetail }) => {
    return (
        <div onClick={() => {
            setRandNnumberForPostDetail(Math.random)
            setPostDetail(data._id)
            setPostdeSlug(data.slug)

        }} className="flex gap-10 items-center relative border border-gray-200 p-2 rounded-md overflow-hidden cursor-pointer hover:scale-[101%] transition-all duration-200">
            <div>
                {
                    <Image src={data.imageUrl} width={250} height={150} alt={data.imageAlt} className="rounded" />
                }
            </div>
            <div>
                <h3>{data.title}</h3>
            </div>
            <div className="flex gap-4 absolute bottom-0 left-0 ">
                <div>
                    {
                        data.published ? <p className="rounded-t bg-green-300 py-1 px-3">انتشار یافته</p> : <p className="rounded-t bg-rose-300 py-1 px-3">پیش نویس</p>
                    }
                </div>
                <div className="bg-rose-300 py-1 px-3 rounded-t-md">
                    {
                        data.createdAt
                    }
                </div>
                <div className="bg-yellow-500 py-1 px-3 rounded-tr-md">
                    {
                        data.updatesAt
                    }
                </div>

            </div>
        </div>
    );
}

export default Box;