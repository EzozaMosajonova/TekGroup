import { useTranslation } from "react-i18next";
import bgImage1 from "../../../assets/portrait.jpg";
import HeroSection from "../HeroSection/Herosection";

const Farmasevtika = () => {
  const { t } = useTranslation();
  return (
    <>
      <HeroSection
        image={bgImage1}
        title={t('hero.title2')}
        subtitle={t('hero.desc2')}
        buttonText={t('hero.button2')}
      />
    </>
  );
};

export default Farmasevtika;
