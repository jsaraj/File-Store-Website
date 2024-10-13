import BlogPage from "../../../components/BlogPage";


const MainBlog = () => {
    return (
        <section className="container">
            <div className="flex flex-col gap-10 py-10">
                <h2 className="text-center">مقالات</h2>
                <BlogPage />
            </div>
        </section>

    );
}

export default MainBlog;