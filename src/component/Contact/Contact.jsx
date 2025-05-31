import React from 'react'
import HeroSection from '../Home/HeroSection/Herosection'
import bgImage1 from "../../assets/portrait.jpg";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from 'react-i18next';


const Contact = () => {
  const sendMessage = (event) => {
    event.preventDefault();

    const token = "8091527756:AAErWWMRg6UTuaI3RIVjiizXhwasqEIhlFQ";
    const chat_id = "6643238247";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const name = document.getElementById("name").value.trim();
    const number = document.getElementById("number").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !number || !email || !message) {
      alert("Iltimos, barcha majburiy maydonlarni to‘ldiring!");
      return;
    }

    const messageContent = `
 Yangi xabar:

 Ismi: ${name}
 Telefon: ${number}
 Email: ${email}
 Xabar: ${message}
`;

    axios
      .post(url, {
        chat_id: chat_id,
        text: messageContent,
      })
      .then(() => {
        toast.success("Xabar muvaffaqiyatli yuborildi!");
        document.getElementById("myform").reset();
      })
      .catch((error) => {
        console.error("Xabar yuborishda xatolik:", error);
        toast.error("Xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko‘ring.");
      });
  };
  const { t } = useTranslation()
  return (
    <>
      <HeroSection
        image={bgImage1}
        title={t('hero.title8')}
        subtitle={t('contact.desc')}
        minHeightClass="min-h-[45vh]"
      />
      <div id="contact" className="py-10 mt-10">
        <div className="container max-w-[1260px] mx-auto px-4 ">
          <div className="flex items-center justify-center mt-10">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* RIGHT SIDE - Contact Info */}
              <div data-aos="fade-right" className="order-2 md:order-1  justify-center shadow-[0_7px_29px_0px_rgba(100,100,111,0.2)] p-10 rounded-2xl">
                <h1 className='font-semibold text-emerald-700 text-xl'>{t('hero.title8')}</h1>
                <h2 className="text-black font-bold md:text-4xl text-2xl mt-2 ">
                  {t("contact.title")}
                </h2>
                <hr className='bg-gray-400 mt-5' />
                <div className='flex items-center w-[90%] m-6 '>
                  <div className='bg-emerald-600 rounded-[50%] w-[60px] h-[60px]'>
                  </div>
                  <div className='ml-4'>
                    <p className='text-xl text-black font-bold'>{t('contact.desc1')}</p>
                    <span className='text-xl text-black font-normal'>hr.uz@tekgrup.net</span>
                  </div>
                </div>
                <div className='flex items-center w-[90%] m-6 '>
                  <div className='bg-emerald-600 rounded-[50%] w-[60px] h-[60px]'>
                  </div>
                  <div className='ml-4'>
                    <p className='text-xl text-black font-bold'>{t('contact.desc2')}</p>
                    <span className='text-xl text-black font-normal'>sales.uz@tekgrup.net | +998 55 511 16 86</span>
                  </div>
                </div>
                <div className='flex items-center w-[90%] m-6 '>
                  <div className='bg-emerald-600 rounded-[50%] w-[60px] h-[60px]'>
                  </div>
                  <div className='ml-4'>
                    <p className='text-xl text-black font-bold'>{t('contact.desc3')}</p>
                    <span className='text-xl text-black font-normal'>info.uz@tekgrup.net | +998 55 515 04 15</span>
                  </div>
                </div>
              </div>

              {/* LEFT SIDE - Form */}
              <form
                data-aos="fade-left"
                id="myform"
                onSubmit={sendMessage}
                className="order-1 md:order-2 space-y-4 shadow-[0_7px_29px_0px_rgba(100,100,111,0.2)] p-8 rounded-2xl"
              >
                <h2 className="text-black font-bold md:text-4xl text-2xl ">
                  {t("contact.headTitle")}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    id="name"
                    type="text"
                    placeholder={t("contact.name")}
                    pattern="^[A-Za-z\s]+$"
                    title="Ism faqat harflardan iborat bo‘lishi kerak"
                    className="border border-gray-600 rounded-lg px-4 py-3 focus:outline-none"
                    required
                  />

                  <input
                    id="number"
                    type="tel"
                    placeholder={t("contact.tel")}
                    pattern="^\+998\d{9}$"
                    title="Telefon raqam +998 bilan boshlanib, jami 9 ta raqamdan iborat bo‘lishi kerak"
                    className="border border-gray-600 rounded-lg px-4 py-3 focus:outline-none"
                    required
                    defaultValue="+998"
                    onFocus={(e) => {
                      if (!e.target.value.startsWith("+998")) {
                        e.target.value = "+998";
                      }
                    }}
                    onChange={(e) => {
                      const cleaned = e.target.value.replace(/[^\d]/g, "");
                      e.target.value = "+998" + cleaned.slice(3, 12);
                    }}
                  />
                </div>
                <input
                  id="email"
                  type="email"
                  placeholder={t("contact.email")}
                  className="w-full border border-gray-600 rounded-lg px-4 py-3 focus:outline-none"
                  required
                />
                <textarea
                  id="message"
                  placeholder={t("contact.message")}
                  rows="6"
                  className="w-full border border-gray-600 rounded-lg px-4 py-3 focus:outline-none resize-none"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-700 text-white  font-bold py-3 px-10 rounded-lg border border-black hover:bg-black hover:text-white transition-all"
                >
                  {t("contact.button")}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ToastContainerni shu yerda qo‘shamiz */}
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </>)
}

export default Contact