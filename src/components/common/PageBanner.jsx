import { motion } from 'framer-motion';
import ArchitecturalBackground from './ArchitecturalBackground';
import './PageBanner.css';

/**
 * Inner-page hero with title and subtitle over the blueprint background.
 */
function PageBanner({ eyebrow, title, highlight, subtitle, archPosition = 'right' }) {
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
