import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sertificate from "../../../assets/sertificate.png";
import Sertificate2 from "../../../assets/sertificate2.png";
import Sertificate3 from "../../../assets/sertificate3.jpg";

const HeroSection = ({ title, subtitle, buttonText, image, badgeText, showPartnersSlider = false ,  minHeightClass="min-h-[75vh]" }) => {
    const navigate = useNavigate();
    const sliderRef = useRef(null); // slider uchun ref

    const partners = [
        { image: Sertificate },
        { image: Sertificate2 },
        { image: Sertificate3 },
    ];

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } }
        ]
    };

    return (
        <div
            className={`relative w-full ${minHeightClass} bg-cover bg-center`}
            style={{ backgroundImage: `url(${image})` }}
        >            <div className="absolute inset-0" style={{ backgroundColor: "rgba(40, 70, 185, 0.35)" }}></div>

            <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto pt-30">
                {badgeText && (
                    <div className="inline-block bg-white text-green-600 font-medium py-2 px-4 rounded-full mb-4">
                        {badgeText}
                    </div>
                )}
                <h1 className="md:text-6xl text-4xl font-bold">{title}</h1>
                <p className="mb-6">{subtitle}</p>
                {buttonText && (
                    <button
                        className="bg-white text-blue-600 px-6 py-2 rounded hover:bg-blue-100 transition"
                        onClick={() => navigate('/contact')}
                    >
                        {buttonText}
                    </button>
                )}
            </div>

            {showPartnersSlider && (
                <div className="relative z-10 mt-16 py-8 ">
                    <div className="max-w-6xl mx-auto px-4">
                        <Slider ref={sliderRef} {...settings}>
                            {partners.map((partner, index) => (
                                <div key={index} className="px-4">
                                    <div
                                        className="bg-white p-6 rounded shadow-md flex justify-center items-center hover:scale-105 transition cursor-pointer"
                                        onClick={() => sliderRef.current?.slickNext()} // rasm bosilganda keyingi slayd
                                    >
                                        <img
                                            src={partner.image}
                                            alt={`Partner ${index}`}
                                            className="h-34 max-h-34 object-contain w-full"
                                        />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HeroSection;
