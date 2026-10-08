import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ArchitecturalBackground from './ArchitecturalBackground';
import './PageBanner.css';

/**
 * Inner-page hero with breadcrumb, title and subtitle over the blueprint background.
 */
function PageBanner({ eyebrow, title, highlight, subtitle, breadcrumb, archPosition = 'right' }) {
  return (
    <section className="page-banner">
      <ArchitecturalBackground position={archPosition} opacity={0.28} />
      <span className="page-banner__shape page-banner__shape--a" aria-hidden="true" />
      <span className="page-banner__shape page-banner__shape--b" aria-hidden="true" />

      <div className="container page-banner__inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <nav aria-label="Breadcrumb" className="page-banner__breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span aria-current="page">{breadcrumb}</span>
          </nav>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="page-banner__title">
            {title} {highlight && <span className="text-orange">{highlight}</span>}
          </h1>
          {subtitle && <p className="page-banner__subtitle">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  );
}

export default PageBanner;
