import Image from "next/image";

const Header = () => {
    return (
        <header className="bg-gray-100 shadow-sm h-20 py-3">
            <div className="container mx-20 ">
                <div className="w-1/12">
                    <Image
                    src="/logo.png"
                    width={50}
                    height={50}
                    alt="logo"
                    priority={true}
                    />
                </div>
            </div>
        </header>
    );
}

export default Header;