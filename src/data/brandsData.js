/**
 * Brands & systems used. Logos live in /public/uploads/ (brands_*.png).
 * If a logo file is missing, the brand name is shown as a wordmark instead.
 */
import { image } from './media';

const logo = image;

export const brands = [
  { id: 'dr-fixit', name: 'Dr. Fixit', logo: logo('brands_dr_fixit.png') },
  { id: 'sika', name: 'Sika', logo: logo('brands_sika.png') },
  { id: 'saint-gobain', name: 'Saint-Gobain', logo: logo('brands_saint_gobain.png') },
  { id: 'fosroc', name: 'Fosroc', logo: logo('brands_fosroc.png') },
  { id: 'dr-cipy', name: 'Dr. Cipy', logo: logo('brands_dr_cipy.png') },
  { id: 'zydex', name: 'Zydex', logo: logo('brands_zydex.png') },
  { id: 'asian-paints', name: 'Asian Paints', logo: logo('brands_asianpaints.png') },
  { id: 'burger', name: 'Burger', logo: logo('brands_burger.png') },
];
