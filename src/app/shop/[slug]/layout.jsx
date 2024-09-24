import ShopAside from "./ShopAside";



const LayoutShop = ({children}) => {
    return (
        <div className="flex justify-between container gap-7">
            <main className="sm:w-9/12 w-full">{children}</main>
            <aside className="sm:2/12 w-full">
                <ShopAside/>
            </aside>
        </div>
    );
}

export default LayoutShop;