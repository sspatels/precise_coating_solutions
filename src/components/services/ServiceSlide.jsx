import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SmartImage from '../common/SmartImage';
import './ServiceSlide.css';

/**
 * Slide for the services slider: photo on top, service name below.
 * Services without a photo (`image: null`) show an empty frame.
 */
function ServiceSlide({ service, tabIndex }) {
  const { id, name, image, icon: Icon } = service;

  return (
    <Link to={`/contact?service=${id}`} className="service-slide" tabIndex={tabIndex}>
      <div className={`service-slide__frame ${image ? '' : 'service-slide__frame--empty'}`}>
        {image ? (
          <SmartImage src={image} alt={name} icon={Icon} />
        ) : (
          <span className="service-slide__placeholder" aria-hidden="true">
            <Icon size={34} strokeWidth={1.5} />
          </span>
        )}
        <span className="service-slide__overlay" aria-hidden="true">
          <span className="service-slide__overlay-name">{name}</span>
          <span className="service-slide__view">
            Enquire Now <ArrowRight size={16} />
          </span>
        </span>
      </div>
      <h3 className="service-slide__name">{name}</h3>
    </Link>
  );
}

export default ServiceSlide;
