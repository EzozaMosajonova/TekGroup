import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import SingleNews from '../../component/SingleNews/SingleNews';

const SingleNewsPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>{t('news.title')} | My Website</title>
        <meta name="description" content={t('news.metaDesc')} />
        <meta property="og:title" content={t('news.title')} />
        <meta property="og:description" content={t('news.metaDesc')} />
      </Helmet>

      <SingleNews />
    </div>
  );
};

export default SingleNewsPage;
