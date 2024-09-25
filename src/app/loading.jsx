import Image from "next/image";

const loading = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <Image src={"/loading.gif"} height={100} width={100} />
        </div>
    );
}

export default loading;