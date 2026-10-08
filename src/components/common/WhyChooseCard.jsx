import Reveal from './Reveal';
import './WhyChooseCard.css';

/**
 * Feature card with numbered index – used in Why Choose Us (Home & About).
 */
function WhyChooseCard({ title, text, icon: Icon, index = 0 }) {
  return (
    <Reveal as="article" delay={Math.min(index * 0.08, 0.4)} className="why-card">
      <div className="why-card__top">
        <span className="why-card__icon">
          <Icon size={26} aria-hidden="true" />
        </span>
        <span className="why-card__num" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <h3 className="why-card__title">{title}</h3>
      <p className="why-card__text">{text}</p>
    </Reveal>
  );
}

export default WhyChooseCard;
