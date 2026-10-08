import { companyData } from '../../data/companyData';
import './Watermark.css';

/**
 * Small company logo shown on top of gallery photos and videos.
 * Source logo comes from companyData, so changing the logo updates every watermark.
 *
 * @param {'sm'|'lg'} size  sm for grid tiles, lg for the fullscreen viewer
 */
function Watermark({ size = 'sm' }) {
  return (
    <span className={`watermark watermark--${size}`} aria-hidden="true">
      <img src={companyData.logo} alt="" />
    </span>
  );
}

export default Watermark;
