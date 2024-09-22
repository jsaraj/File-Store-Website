

import EndBanner from "../../components/banner/EndBanner";
import MiddleBanner from "../../components/banner/MiddleBanner";
import CategoryBox from "../../components/catgoryBox/CategoryBox";
import BlogSlider from "../../components/slider/BlogSlider";
import GraphicSlider from "../../components/slider/GraphicSlider";
import MainSlider from "../../components/slider/mainSlider";
import ProductSlider from "../../components/slider/ProductSlider";

export default function Home() {
  return (
    <>
      <MainSlider />
      <ProductSlider title="اپلیکیشن" linkslider="apps" backcolor="#ffb74d" />
      <MiddleBanner />
      <ProductSlider title="کتاب" linkslider="books" backcolor="#26c6da" />
      <CategoryBox />
      <GraphicSlider backcolor="#cddc39" />
      <EndBanner />
      <BlogSlider backcolor="#ce93d8" />
    </>
  );
}
