import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import Hero from '../../component/Home/Hero/Hero';
import Number from '../../component/Home/Number/Number';
import Farmasevtika from '../../component/Home/Farmasevtika/Farmasevtika';
import Xizmatlar from '../../component/Home/xizmatlar/Xizmatlar';
import Hamkorlar from '../../component/Home/Hamkorlar/Hamkorlar';

const HomePages = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>{t('header.home')}</title>
        <meta name="description" content={t('home.metaDesc')} />
        <meta property="og:title" content={t('header.home')} />
        <meta property="og:description" content={t('home.metaDesc')} />
      </Helmet>

      {/* Sahifa komponentlari */}
      <Hero />
      <Number />
      <Farmasevtika />
      <Xizmatlar />
      <Hamkorlar />
    </div>
  );
};

export default HomePages;
