import { MapPin, Navigation } from 'lucide-react';
import Reveal from '../common/Reveal';
import { companyData } from '../../data/companyData';
import ArchitecturalBackground from '../common/ArchitecturalBackground';
import './LocationMap.css';

/**
 * Location map. Set `companyData.mapEmbedUrl` to a Google Maps / OpenStreetMap
 * embed URL to show a live map – no API key needed. Until then a styled placeholder is shown.
 */
function LocationMap() {
  const { mapEmbedUrl, address, name } = companyData;

  return (
    <section className="location-map" aria-label="Our location">
      <ArchitecturalBackground position="right" />
      <div className="container">
        <Reveal className="location-map__frame">
          {mapEmbedUrl ? (
            <iframe
              src={mapEmbedUrl}
              title={`${name} location map`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          ) : (
            <div className="location-map__placeholder" role="img" aria-label={`Map placeholder for ${address}`}>
              <span className="location-map__road location-map__road--h" />
              <span className="location-map__road location-map__road--v" />
              <span className="location-map__road location-map__road--d" />
              <span className="location-map__pin">
                <MapPin size={30} aria-hidden="true" />
              </span>
            </div>
          )}

          <div className="location-map__card">
            <span className="location-map__card-icon">
              <Navigation size={20} aria-hidden="true" />
            </span>
            <div>
              <h2 className="location-map__title">Visit Our Office</h2>
              <p>{address}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default LocationMap;
