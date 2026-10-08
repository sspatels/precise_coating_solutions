import { useState } from 'react';
import { ImageIcon } from 'lucide-react';
import './SmartImage.css';

/**
 * Image with lazy loading and a branded blueprint placeholder
 * (or `fallbackSrc`) shown when the file is missing (so the layout never shows a broken image).
 */
function SmartImage({ src, fallbackSrc, alt, icon: Icon = ImageIcon, className = '', eager = false, ...rest }) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [failed, setFailed] = useState(!src);

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setFailed(true);
    }
  };

  if (failed) {
    return (
      <div className={`smart-img smart-img--placeholder ${className}`} role="img" aria-label={alt}>
        <span className="smart-img__icon">
          <Icon size={34} strokeWidth={1.6} aria-hidden="true" />
        </span>
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={`smart-img ${className}`}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={handleError}
      {...rest}
    />
  );
}

export default SmartImage;
