import React from 'react';
import { Helmet } from 'react-helmet';
import About from "../../component/About/About";
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('header.about')} | My Website</title>
        <meta name="description" content={t('aboutUs.desc1')} />
        <meta property="og:title" content={t('header.about')} />
        <meta property="og:description" content={t('aboutUs.desc2')} />
      </Helmet>

      <About />
    </>
  );
};

export default AboutPage;
