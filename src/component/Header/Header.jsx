import React, { useState, } from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Logo from "../../assets/logoTop.png"
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../../18n';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const { t } = useTranslation();
  const location = useLocation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setMenuOpen(false);
  };
  const linkClass = (path) =>
    `md:text-lg text-[12px] font-bold transition ${location.pathname === path ? 'text-[#57b35a]' : 'text-gray-800'}`;
  const linkMenuClass = (path) =>
    `text-lg  font-bold transition ${location.pathname === path ? 'text-[#57b35a]' : 'text-gray-800'}`;
  return (
    <>
      <div className='bg-blue-700 hidden md:flex w-full  p-3'>
        <div className='max-w-[1420px] w-full flex justify-end mx-auto '>
          <div className='flex justify-between items-center w-[35%]'>
            <p className='text-white flex justify-between items-center text'> <MdOutlineMailOutline className='text-2xl' />  info.uz@tekgrup.net</p>
            <p className='text-white md:pl-0 pl-2'>+998555150415</p>
          </div>
        </div>
      </div>
      <div className='container max-w-[1420px] w-full flex justify-between items-center mx-auto p-3 overflow-hidden'>
        <Link to='/'><img className='sm:w-full   md:h-25 sm:h-18 h-24' src={Logo} alt="Logo images" /></Link>
        <div className='flex justify-between items-center w-[70%]'>
          <ul className='sm:flex justify-between items-center w-[80%] hidden'>
            <Link to='/' className={linkClass("/")}><li className='md:text'>{t('header.home')}</li></Link>
            <Link to='/news' className={linkClass("/news")}><li>{t('header.news')}</li></Link>
            <Link to='/about' className={linkClass("/about")}><li>{t('header.about')}</li></Link>
            <Link to='/contact' className={linkClass("/contact")}><li>{t('header.contact')}</li></Link>
          </ul>
          <div className='w-[70px] sm:ml-0 ml-10'>
            <form className="max-w-sm mx-auto w-full">
              <select
                value={i18n.language}
                id="countries" onChange={(e) => changeLanguage(e?.target.value)}
                className="border  text-sm rounded-lg focus:[#6c2dba] focus:border-[#6c2dba] block w-full p-2.5  dark:border-[#6c2dba] dark:placeholder-[#6c2dba] dark:text-[#6c2dba] dark:focus:ring-[#6c2dba] dark:focus:border-[#6c2dba]"
              >
                <option value="uz">UZ</option>
                <option value="ru">Py</option>
              </select>
            </form>
          </div>
           <div className="relative sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-3xl p-2 mt-2 text-gray-800 z-50 relative"
          >
            {isOpen ? <IoClose /> : <IoMenu />}
          </button>

          {isOpen && (
            <div className="fixed left-0 top-25 right-0 w-[100%] py-3 max-w-full bg-white rounded-md shadow-lg z-40 animate-slide-down border border-gray-200 max-h-[50vh] overflow-auto">
              <ul className="px-4 text-gray-800 text-center">
                <Link to='/' className={linkMenuClass("/")}><li className='md:text'>{t('header.home')}</li></Link>
                <Link to='/news' className={linkMenuClass("/news")}><li>{t('header.news')}</li></Link>
                <Link to='/about' className={linkMenuClass("/about")}><li>{t('header.about')}</li></Link>
                <Link to='/contact' className={linkMenuClass("/contact")}><li>{t('header.contact')}</li></Link>
              </ul>
            </div>
          )}
        </div>
        </div>


      </div>
    </>
  )
}

export default Header