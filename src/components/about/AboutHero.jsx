import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import { companyData } from '../../data/companyData';
import './AboutHero.css';

const ease = [0.22, 1, 0.36, 1];

// Phones in landscape: too short for the pinned banner effect
const SHORT_SCREEN = '(max-height: 500px)';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

/** Heading words: `accent: true` words are orange */
const TITLE_WORDS = [
  { text: 'We' },
  { text: 'Stop' },
  { text: 'Water', accent: true },
  { text: 'Damage', accent: true },
  { text: 'Before' },
  { text: 'It' },
  { text: 'Becomes' },
  { text: 'a' },
  { text: 'Bigger' },
  { text: 'Problem.' },
];

/**
 * Full-width About banner (image: companyData.aboutImage).
 * The banner is sticky (see About.css): the photo stays still, the text scrolls up normally,
 * and the content below then slides up over the photo.
 */
function AboutHero() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  // The banner is pinned (sticky), so the text is moved up by exactly the scroll amount:
  // it scrolls away like normal page content while the photo stays still.
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, (y) =>
    // On short landscape screens the banner is not pinned (see AboutHero.css), so the text scrolls naturally
    reduceMotion || window.matchMedia(SHORT_SCREEN).matches ? 0 : -y,
  );

  return (
    <section className="about-hero" aria-labelledby="about-title" ref={sectionRef}>
      <div className="about-hero__parallax">
        <img
          src={companyData.aboutImage}
          alt="Waterproofing professional applying a protective coating on a rooftop"
          className="about-hero__image"
          width="2048"
          height="768"
          fetchPriority="high"
        />
      </div>
      <span className="about-hero__overlay" aria-hidden="true" />

      <div className="container about-hero__inner">
        <motion.div className="about-hero__content" style={{ y: textY }}>
          <div>
            <motion.nav aria-label="Breadcrumb" className="about-hero__breadcrumb" {...fadeUp(0)}>
              <Link to="/">Home</Link>
              <ChevronRight size={14} aria-hidden="true" />
              <span aria-current="page">About Us</span>
            </motion.nav>
          </div>

          <div>
            <motion.span className="eyebrow about-hero__eyebrow" {...fadeUp(0.1)}>
              About {companyData.name}
            </motion.span>
          </div>

          <motion.h1
            id="about-title"
            className="about-hero__title"
            aria-label={TITLE_WORDS.map((w) => w.text).join(' ')}
          >
            {TITLE_WORDS.map((word, index) => (
              <span key={word.text + index} className="about-hero__word-mask" aria-hidden="true">
                <motion.span
                  className={`about-hero__word ${word.accent ? 'text-orange' : ''}`}
                  initial={{ y: '110%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.2 + index * 0.06, ease }}
                >
                  {word.text}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <div>
            <motion.p className="about-hero__text" {...fadeUp(0.75)}>
              {companyData.description}
            </motion.p>
          </div>

          <div>
            <motion.div className="about-hero__actions" {...fadeUp(0.9)}>
              <Button to="/contact" size="lg">
                Book a Site Inspection
              </Button>
              <ul className="about-hero__goals">
                {companyData.coreGoal.map((line, index) => (
                  <motion.li
                    key={line}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.12, ease }}
                  >
                    {line}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutHero;
