import React from 'react'
import { useTranslation } from 'react-i18next'
import Images from "../../../assets/Testimonial.png"

const Xizmatlar = () => {
    const { t } = useTranslation()
    return (
        <div className='container sm:py-40 py-10 max-w-[1240px] w-full flex md:justify-between justify-center flex-wrap items-center mx-auto p-3'>
            <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                 className='md:w-1/2  w-[90%] md:text-left text-center '>
                <p className='text-[#57b35a] sm:text-xl text-lg'>{t('service.title1')}</p>
                <h1 className='text-gray-950 md:text-5xl text-3xl font-bold mt-3'>{t('service.desc1')}</h1>
                <img className='' src={Images} alt="images" />
            </div>
            <div data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" 
                className='md:w-1/2 w-[90%]  md:text-left text-center'>
                <div className='mt-5 shadow-[0_7px_29px_0px_rgba(100,100,111,0.2)] p-8 md:pl-30  rounded-2xl text-2xl font-semibold text-gray-500'>
                    {t('service.subtitle1')}
                </div>
                <div className='mt-5 shadow-[0_7px_29px_0px_rgba(100,100,111,0.2)] p-8 md:pl-30 rounded-2xl text-2xl font-semibold text-gray-500'>
                    {t('service.subtitle2')}
                </div>
                <div className='mt-5 shadow-[0_7px_29px_0px_rgba(100,100,111,0.2)] p-8 md:pl-30 rounded-2xl text-2xl font-semibold text-gray-500'>
                    {t('service.subtitle3')}
                </div>
            </div>
        </div>
    )
}

export default Xizmatlar