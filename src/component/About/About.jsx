import React from 'react';
import { useTranslation } from 'react-i18next';
import bgImage1 from "../../assets/abouthero.jpg";
import HeroSection from '../Home/HeroSection/Herosection';
import Images1 from "../../assets/tekgrup.jpg";
import bgImage2 from "../../assets/abouthero2.jpg";
import Images from "../../assets/Testimonial.png"
import Imagesbt from "../../assets/medicine.jpg"

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeroSection
        image={bgImage1}
        title={t('header.about')}
        subtitle={t('hero.desc4')}
        minHeightClass="min-h-[45vh]"
      />

      <div className='container sm:py-40 py-10 max-w-[1240px] w-full flex flex-wrap items-center justify-center md:justify-between mx-auto p-3'>

        {/* 🖼 Rasm — kichik ekranda birinchi, katta ekranda ikkinchi */}
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className='md:w-[50%] w-[90%]  order-1 md:order-2'
        >
          <img className='rounded-2xl h-auto ' src={Images1} alt="images" />
        </div>

        {/* 📄 Matn — kichik ekranda ikkinchi, katta ekranda birinchi */}
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className='md:w-[45%] w-[90%] md:text-left order-2 md:order-1 mt-6 md:mt-0'
        >
          <p className='text-[#57b35a] sm:text-xl text-lg'>{t('aboutUs.title')}</p>
          <h1 className='text-gray-950 md:text-5xl text-3xl font-bold mt-3'>{t('aboutUs.heading')}</h1>
          <h2 className='text-gray-600 text-md font-normal mt-5'>{t('aboutUs.desc1')}</h2>
          <h2 className='text-gray-600 text-md font-normal mt-5'>{t('aboutUs.desc2')}</h2>
        </div>
      </div>
      <HeroSection
        image={bgImage2}
        title={t('hero.title6')}
        subtitle={t('hero.desc5')}
        buttonText={t('hero.button1')}
      />
      <div className='container sm:py-40 py-10 max-w-[1240px] w-full flex md:justify-between justify-center flex-wrap  mx-auto p-3'>
        <div data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className='md:w-1/2  w-[90%] md:text-left text-center '>
          <p className='text-[#57b35a] sm:text-xl text-lg'>{t('service.title2')}</p>
          <h1 className='text-gray-950 md:text-5xl text-3xl font-bold mt-3'>{t('service.desc2')}</h1>
          <img className='' src={Images} alt="images" />
        </div>
        <div data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className='md:w-1/2 w-[90%]  md:text-left text-center'>
          <div className='mt-5 shadow-[0_7px_29px_0px_rgba(100,100,111,0.2)] p-8 md:pl-30  rounded-2xl text-2xl font-semibold text-gray-500'>
            {t('service.subtitle4')}
          </div>
          <div className='mt-5 shadow-[0_7px_29px_0px_rgba(100,100,111,0.2)] p-8 md:pl-30 rounded-2xl text-2xl font-semibold text-gray-500'>
            {t('service.subtitle5')}
          </div>
        </div>
      </div>
          <HeroSection
        image={Imagesbt}
        title={t('hero.title7')}
        showPartnersSlider={true} 
        slidesToShow={3}
      />

    </>
  );
};

export default About;
