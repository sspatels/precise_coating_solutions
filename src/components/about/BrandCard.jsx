import { useState } from 'react';

/**
 * Brand tile: logo with the brand name below.
 * Falls back to a text wordmark if the logo file is missing.
 */
function BrandCard({ name, logo }) {
  const [hasLogo, setHasLogo] = useState(Boolean(logo));

  return (
    <div className="brand-card">
      <span className="brand-card__shine" aria-hidden="true" />
      <div className="brand-card__logo-wrap">
        {hasLogo ? (
          <img src={logo} alt={`${name} logo`} loading="lazy" className="brand-card__logo" onError={() => setHasLogo(false)} />
        ) : (
          <span className="brand-card__wordmark">{name}</span>
        )}
      </div>
      <span className="brand-card__name">{name}</span>
    </div>
  );
}

export default BrandCard;
