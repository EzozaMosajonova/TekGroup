import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Atabay from "../../../assets/Atabay.jpg";
import Dalin from "../../../assets/Dalin.png";
import Kopas from "../../../assets/kopas.jpg";
import Pf from "../../../assets/pf.png";
import Medicine from "../../../assets/medicine.jpg";
import { useTranslation } from "react-i18next";

const Hmakorlar = () => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const { t } = useTranslation();

  const partners = [
    { image: Atabay },
    { image: Dalin },
    { image: Kopas },
    { image: Pf }
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 1000,
    slidesToShow: 3, // yoki kerak bo‘lsa 4
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div
      className="relative w-full bg-cover bg-center py-20"
      style={{ backgroundImage: `url(${Medicine})` }}
    >
      {/* Orqa fon overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(40, 70, 185, 0.35)" }}
      ></div>

      {/* Matn */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto pt-20">
        <h1 className="md:text-6xl text-4xl font-bold"> {t("hero.title3")}</h1>
      </div>
      {/* Slider */}
      <div className="relative z-10 mt-12 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <Slider ref={sliderRef} {...settings}>
            {partners.map((partner, index) => (
              <div key={index} className="px-4">
                <div
                  className="bg-white p-6 rounded shadow-md flex justify-center items-center hover:scale-105 transition cursor-pointer"
                  onClick={() => sliderRef.current?.slickNext()}
                >
                  <img
                    src={partner.image}
                    alt={`Partner ${index}`}
                    className="h-[130px] object-contain w-full"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hmakorlar;
