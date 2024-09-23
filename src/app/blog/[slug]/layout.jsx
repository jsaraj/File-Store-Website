import BlogAside from "./BlogAside";



const LayoutBlog = ({children}) => {
    return (
        <div className="flex justify-between container gap-7">
            <main className="sm:w-9/12 w-full">{children}</main>
            <aside className="sm:2/12 w-full">
                <BlogAside/>
            </aside>
        </div>
    );
}

export default LayoutBlog;