import { useLocation } from 'react-router-dom';
import { companyData } from '../../data/companyData';

/**
 * Per-page SEO. React 19 hoists <title>, <meta> and <link> into <head> automatically,
 * so no extra library (e.g. react-helmet) is required.
 */
function Seo({ title, description }) {
  const { pathname } = useLocation();
  const url = `${companyData.websiteHref}${pathname === '/' ? '/' : pathname}`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
    </>
  );
}

export default Seo;
