import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SmartImage from '../common/SmartImage';
import './ServiceCard.css';

/**
 * Premium service card. Clicking leads to the contact form with the service pre-selected.
 */
function ServiceCard({ service, categoryLabel }) {
  const { id, name, description, image, icon: Icon } = service;

  return (
    <article className="service-card">
      <Link to={`/contact?service=${id}`} className="service-card__link">
        <div className="service-card__media">
          <SmartImage src={image} alt={name} icon={Icon} />
          <span className="service-card__overlay" aria-hidden="true" />
          {categoryLabel && <span className="service-card__tag">{categoryLabel}</span>}
        </div>

        <div className="service-card__body">
          <span className="service-card__icon">
            <Icon size={24} aria-hidden="true" />
          </span>
          <h3 className="service-card__title">{name}</h3>
          <p className="service-card__text">{description}</p>
          <span className="service-card__more">
            <span>Enquire Now</span>
            <span className="service-card__arrow">
              <ArrowRight size={18} aria-hidden="true" />
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
}

export default ServiceCard;
