import Reveal from './Reveal';
import './SectionHeading.css';

/**
 * Section title block: eyebrow label, heading (with optional orange highlight) and intro text.
 */
function SectionHeading({ eyebrow, title, highlight, text, align = 'center', light = false, as: Tag = 'h2' }) {
  return (
    <Reveal className={`section-heading section-heading--${align} ${light ? 'section-heading--light' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Tag className="section-heading__title">
        {title} {highlight && <span className="text-orange">{highlight}</span>}
      </Tag>
      {text && <p className="section-heading__text">{text}</p>}
    </Reveal>
  );
}

export default SectionHeading;
