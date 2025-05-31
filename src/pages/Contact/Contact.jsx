import React from 'react';
import { Helmet } from 'react-helmet';
import Contact from '../../component/Contact/Contact';
import { useTranslation } from 'react-i18next';

const ContactPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('header.contact')} | My Website</title>
        <meta name="description" content={t('contact.desc')} />
        <meta property="og:title" content={t('header.contact')} />
        <meta property="og:description" content={t('contact.title')} />
      </Helmet>

      {/* i18n.language sahifa qayta render bo‘lishiga sabab bo‘ladi */}
      <Contact key={i18n.language} />
    </>
  );
};

export default ContactPage;
