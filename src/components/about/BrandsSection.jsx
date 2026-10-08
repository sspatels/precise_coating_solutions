import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import BrandCard from './BrandCard';
import ArchitecturalBackground from '../common/ArchitecturalBackground';
import { brands } from '../../data/brandsData';
import './BrandsSection.css';

const ease = [0.22, 1, 0.36, 1];

function BrandsSection() {
  return (
    <section className="section" aria-label="Brands and systems we use">
      <ArchitecturalBackground position="right" />
      <div className="container">
        <SectionHeading
          eyebrow="Trusted Materials"
          title="Brands & Systems"
          highlight="We Use"
          text="We work with proven, industry-recognised waterproofing and coating systems."
        />
        <ul className="brands__grid">
          {brands.map((brand, index) => (
            <motion.li
              key={brand.id}
              initial={{ opacity: 0, y: 30, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '0px 0px -40px 0px' }}
              transition={{ duration: 0.55, delay: (index % 4) * 0.1 + Math.floor(index / 4) * 0.15, ease }}
            >
              <BrandCard {...brand} />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default BrandsSection;
