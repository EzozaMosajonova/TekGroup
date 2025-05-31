import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { newsData } from '../../item';

const SingleNews = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  // ID string bo'lishi mumkin, shuning uchun son bilan taqqoslashda Number ga o'tkazamiz
  const newsItem = newsData.find(item => item.id === Number(id));

  if (!newsItem) {
    return <div className="text-center text-red-500">Yangilik topilmadi</div>;
  }

  return (
    <div className="container max-w-[1220px] mx-auto py-8 px-4">
      <img
        src={newsItem.image}
        alt={t(newsItem.titleKey || newsItem.title)}
        className="w-full h-100 object-cover rounded mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">
        {t(newsItem.titleKey || newsItem.title)}
      </h1>
      <p className="text-gray-500 mb-2">{t(newsItem.dateKey || newsItem.date)}</p>
      <p className="text-lg text-gray-700 mb-4">
        {t(newsItem.descriptionKey || newsItem.description)}
      </p>
      <p className="text-sm text-gray-600">
        {/* Agar qo‘shimcha paragraf bo‘lsa (masalan desc1, desc2), ularni ham ko‘rsating */}
        {t(`news.desc1`)}<br />
        {t(`news.desc2`)}
      </p>
      <div className='mt-20'>
        <h2 className='text-black text-3xl font-bold'>{t('news.desc11')}</h2>
        <div className="container max-w-[1420px] w-full mx-auto py-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {newsData
              .filter(news => news.id !== Number(id)) // shu yangilikdan tashqari
              .map(news => (
                <Link to={`/news/${news.id}`} key={news.id} className="block bg-white rounded shadow p-4 hover:shadow-lg transition-shadow">
                  <img
                    src={news.image}
                    alt={t(news.titleKey)}
                    className="w-full h-50 object-cover mb-4 rounded"
                  />
                  <h3 className="text-md font-semibold mb-2">{t(news.titleKey)}</h3>
                  <p className="text-gray-500 text-[12px] mb-2">{t(news.dateKey)}</p>
                  <p className="text-gray-700 text-[12px] mb-4">{t(news.descriptionKey)}</p>
                  <span className="text-blue-600 hover:underline text-sm cursor-pointer">
                    {t(news.readMoreKey)}
                  </span>
                </Link>
              ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
