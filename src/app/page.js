

import MiddleBanner from "../../components/banner";
import CategoryBox from "../../components/catgoryBox/CategoryBox";
import GraphicSlider from "../../components/slider/GraphicSlider";
import MainSlider from "../../components/slider/mainSlider";
import ProductSlider from "../../components/slider/ProductSlider";

export default function Home() {
  return (
    <>
      <MainSlider/>
      <ProductSlider title="اپلیکیشن" linkslider="apps" backcolor="#ffb74d"/>
      <MiddleBanner/>
      <ProductSlider title="کتاب" linkslider="books" backcolor="#26c6da"/>
      <CategoryBox/>
      <GraphicSlider backcolor="#cddc39"/>
    </>
  );
}
