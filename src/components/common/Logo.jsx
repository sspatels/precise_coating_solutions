import { Link } from 'react-router-dom';
import { companyData } from '../../data/companyData';
import './Logo.css';

/**
 * Company logo from /public/uploads/logo.png.
 * The source image has generous white padding, so it is cropped via object-fit.
 */
function Logo({ variant = 'header', onClick }) {
  return (
    <Link to="/" className={`logo logo--${variant}`} aria-label={`${companyData.name} – Home`} onClick={onClick}>
      <img src={companyData.logoTransparent} alt={companyData.name} className="logo__img" width="797" height="564" />
    </Link>
  );
}

export default Logo;
