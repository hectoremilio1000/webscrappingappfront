import Slider from "react-slick";
import ProductCard from "./ProductCard";
import { NextArrow, PrevArrow } from "./SliderArrows";

export default function CategorySection({ section }) {
  const settings = {
    infinite: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    ],
  };

  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold mb-3">{section.category}</h2>
      <Slider {...settings}>
        {section.products.map((p, i) => (
          <ProductCard key={i} p={p} />
        ))}
      </Slider>
    </section>
  );
}
