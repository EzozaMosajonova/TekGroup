import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import News from '../../component/News/News';

const NewsPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>{t('header.news')} | My Website</title>
        <meta name="description" content={t('news.metaDesc')} />
        <meta property="og:title" content={t('header.news')} />
        <meta property="og:description" content={t('news.metaDesc')} />
      </Helmet>

      <News />
    </div>
  );
};

export default NewsPage;
