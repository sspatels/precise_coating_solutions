import { MapPin, ZoomIn } from 'lucide-react';
import SmartImage from '../common/SmartImage';
import Watermark from './Watermark';
import './GalleryCard.css';

/**
 * Photo tile. Whole card is a button that opens the viewer.
 */
function GalleryCard({ item, categoryLabel, onOpen }) {
  return (
    <button type="button" className="gallery-card" onClick={onOpen} aria-label={`View photo: ${item.title}`}>
      <SmartImage src={item.src} alt={item.title} />
      <Watermark />
      <span className="gallery-card__overlay">
        <span className="gallery-card__category">{categoryLabel}</span>
        <span className="gallery-card__title">{item.title}</span>
        {item.location && (
          <span className="gallery-card__location">
            <MapPin size={14} aria-hidden="true" /> {item.location}
          </span>
        )}
        <span className="gallery-card__view">
          <ZoomIn size={18} aria-hidden="true" /> View
        </span>
      </span>
    </button>
  );
}

export default GalleryCard;
