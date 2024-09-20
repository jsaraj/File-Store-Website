import ProductBox from "./ProductBox";



const ProductSlider = () => {
    return (
        <section className="bg-orange-400 h-[70vh] w-full my-10 px-16 py-6 shadow-inner2">
            <h2 className="text-white border-r-2 border-white pr-3">محصولات</h2>
            <div className="flex gap-5 flex-wrap justify-between pt-5">
                <ProductBox/>
                <ProductBox/>
                <ProductBox/>
                <ProductBox/>
            </div>
        </section>
    );
}

export default ProductSlider;