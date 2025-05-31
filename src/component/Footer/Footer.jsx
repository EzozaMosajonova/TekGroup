import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../assets/logoTop.png"
import { useTranslation } from 'react-i18next';


const Footer = () => {
  const { t } = useTranslation();

  return (
      <div className='container max-w-[1420px] p-3 w-full mx-auto  mt-10'>
      <div className='w-full   justify-between items-center sm:inline-flex inline-block'>
        <div className='sm:w-1/3 w-[70%]'>
          <Link to='/'><img className='md:w-[70%] w-full   md:h-35 sm:h-18 h-40' src={Logo} alt="Logo images" /></Link>
          <p className='sm:text-xl text-lg font-bold text-gray-600'>Tek Grup Health Services </p>
        </div>
        <div className='justify-between items-center md:w-[80%] w-full sm:inline-flex inline-block'>
          <div className='sm:w-1/3 w-[70%] sm:mt-0 mt-7'>
            <p className='sm:text-xl text-lg font-bold text-gray-600'>{t('footer.title1')}</p>
            <Link to='/contact' className='text-md text-gray-400 hover:text-[#34d98e] cursor-pointer'><p className='mb-3'>Toshkent sh. Bektemir tumani</p></Link>
            <Link to='/contact' className='text-md text-gray-400 hover:text-[#34d98e] cursor-pointer'><p className='mb-3'>Oltintopgan ko'chasi 40-uy</p></Link>
            <Link to='/contact' className='text-md text-gray-400'><p className='mb-3'>info.uz@tekgrup.net</p></Link>
            <Link to='/contact' className='text-md text-gray-400'><p className='mb-3'>+998 55 515 04 15</p></Link>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="w-full">
              <iframe
                src="https://yandex.uz/map-widget/v1/org/229456351743/?ll=69.385408%2C41.239819&z=11"
                width="100%"
                height="200"
                frameBorder="1"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <hr className='bg-gray-500 mt-20 ' />
      <p className='text-gray-500 py-5'>© 2025 Tek Grup Health Services. All rights reserved.</p>
    </div>
  )
}

export default Footer