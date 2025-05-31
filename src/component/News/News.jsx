import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"; // Link import qilindi
import bgImage1 from "../../assets/medicine.jpg";
import HeroSection from "../Home/HeroSection/Herosection";
import { newsData } from "../../item";

const News = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeroSection
        image={bgImage1}
        title={t('hero.title5')}
        minHeightClass="min-h-[45vh]"
      />

      <div className="container max-w-[1420px] w-full mx-auto py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map(news => (
            <Link to={`/news/${news.id}`} key={news.id} className="block bg-white rounded shadow p-4 hover:shadow-lg transition-shadow">
              <img
                src={news.image}
                alt={t(news.titleKey)}
                className="w-full h-70 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-semibold mb-2">{t(news.titleKey)}</h3>
              <p className="text-gray-500 text-sm mb-2">{t(news.dateKey)}</p>
              <p className="text-gray-700 mb-4">{t(news.descriptionKey)}</p>
              <span className="text-blue-600 hover:underline text-sm cursor-pointer">
                {t(news.readMoreKey)}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
