import { useTranslation } from "react-i18next";
import bgImage1 from "../../../assets/bghero.jpg";
import HeroSection from "../HeroSection/Herosection";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <>
      <HeroSection
        image={bgImage1}
        badgeText={t('hero.text')}
        title={t('hero.title1')}
        subtitle={t('hero.desc1')}
        buttonText={t('hero.button1')}
      />
    </>
  );
};

export default Hero;
