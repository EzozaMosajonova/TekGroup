import React from 'react'
import CountUp from 'react-countup'
import { useTranslation } from 'react-i18next'

const Number = () => {
  const { t } = useTranslation()
  return (
    <div data-aos="fade-right" className='sm:py-40 py-20 container max-w-[1240px] w-full flex justify-around flex-wrap mx-auto text-center text-2xl text-[#1d3482] font-bold'>
      <div className='md:w-1/3 sm:w-1/2 w-[90%] mt-5  shadow-[0_7px_29px_0px_rgba(100,100,111,0.2)] p-8 rounded-2xl'>
        <div className='flex justify-center items-center'>
          <CountUp end={8} duration={1} enableScrollSpy scrollSpyDelay={200} />
          <p> + {t('number.desc')}</p>
        </div>
        <p>{t('number.desc1')}</p>
      </div>

      <div className='md:w-1/3 sm:w-1/2 w-[90%] mt-5  shadow-[0_7px_29px_0px_rgba(100,100,111,0.2)] p-8 rounded-2xl'>
        <div className='flex justify-center items-center'>
          <CountUp end={20} duration={1} enableScrollSpy scrollSpyDelay={200} />
          <p> +</p>
        </div>
        <p>{t('number.desc2')}</p>
      </div>

      <div className='md:w-1/3 sm:w-1/2 w-[90%] mt-5  shadow-[0_7px_29px_0px_rgba(100,100,111,0.2)] p-8 rounded-2xl'>
        <div className='flex justify-center items-center'>
          <CountUp end={30} duration={1} enableScrollSpy scrollSpyDelay={200} />
          <p> +</p>
        </div>
        <p>{t('number.desc3')}</p>
      </div>

      <div className='md:w-1/3 sm:w-1/2 w-[90%] mt-5 sm:mt-0 shadow-[0_7px_29px_0px_rgba(100,100,111,0.2)] p-8 rounded-2xl'>
        <div className='flex justify-center items-center'>
          <CountUp end={15} duration={1} enableScrollSpy scrollSpyDelay={200} />
          <p> +</p>
        </div>
        <p>{t('number.desc4')}</p>
      </div>

      <div className='md:w-1/3 mt-5 sm:mt-0 sm:w-1/2 w-[90%] shadow-[0_7px_29px_0px_rgba(100,100,111,0.2)] p-8 rounded-2xl'>
        <div className='flex justify-center items-center'>
          <CountUp end={200} duration={1} enableScrollSpy scrollSpyDelay={200} />
          <p> +</p>
        </div>
        <p>{t('number.desc5')}</p>
      </div>

      <div className='md:w-1/3 mt-5 sm:mt-0 sm:w-1/2 w-[90%] shadow-[0_7px_29px_0px_rgba(100,100,111,0.2)] p-8 rounded-2xl'>
        <div className='flex justify-center items-center'>
          <p>2,000kv</p>
        </div>
        <p>{t('number.desc6')}</p>
      </div>
    </div>

  )
}

export default Number