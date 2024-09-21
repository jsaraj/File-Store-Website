

import MiddleBanner from "../../components/banner";
import MainSlider from "../../components/slider/mainSlider";
import ProductSlider from "../../components/slider/ProductSlider";

export default function Home() {
  return (
    <>
      <MainSlider/>
      <ProductSlider title="اپلیکیشن" linkslider="apps" backcolor="#ffb74d"/>
      <MiddleBanner/>
      <ProductSlider title="کتاب" linkslider="books" backcolor="#26c6da"/>
    </>
  );
}
