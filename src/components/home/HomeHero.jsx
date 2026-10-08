import { motion } from 'framer-motion';
import Button from '../common/Button';
import RainEffect from './RainEffect';
import { heroContent } from '../../data/contentData';
import { companyData } from '../../data/companyData';
import './HomeHero.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

/**
 * Full-width landing hero: the hero image fills the section,
 * with falling rain and the headline on top.
 */
function HomeHero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <img
        src={companyData.heroImage}
        alt="Modern residential building protected with professional waterproofing"
        className="hero__image"
        width="1672"
        height="941"
        fetchPriority="high"
      />
      <span className="hero__overlay" aria-hidden="true" />
      <RainEffect />

      <div className="container hero__inner">
        <div className="hero__content">
          <motion.span className="eyebrow hero__eyebrow" {...fadeUp(0)}>
            {heroContent.eyebrow}
          </motion.span>

          <motion.h1 id="hero-title" className="hero__title" {...fadeUp(0.1)}>
            {heroContent.titleStart}
            <span className="hero__title-highlight">{heroContent.titleHighlight}</span>
          </motion.h1>

          <motion.p className="hero__text" {...fadeUp(0.2)}>
            {heroContent.description}
          </motion.p>

          <motion.div className="hero__actions" {...fadeUp(0.3)}>
            <Button to={heroContent.primaryCta.path} size="lg">
              {heroContent.primaryCta.label}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
