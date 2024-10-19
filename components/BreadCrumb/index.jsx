import Link from "next/link";



const BreadCrumb = ({ secondTitle, secondLink, title ,link}) => {
    return (
        <div className="flex justify-start items-center gap-2 py-4">
            <Link href={"/"} className="hover:text-orange-400 transition-all duration-200" >خانه</Link>
            <span>/</span>
            <Link href={secondLink} className="hover:text-orange-400 transition-all duration-200">{secondTitle}</Link>
            <span>/</span>
            <Link href={link} className="hover:text-orange-400 transition-all duration-200">{title}</Link>
        </div>
    );
}

export default BreadCrumb;