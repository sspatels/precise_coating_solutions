import { AnimatePresence, motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import { serviceCategories } from '../../data/servicesData';
import './ServiceGrid.css';

const categoryLabels = Object.fromEntries(serviceCategories.map((c) => [c.id, c.label]));

/**
 * Responsive 3 / 2 / 1 column grid of ServiceCards with animated filtering.
 */
function ServiceGrid({ services, showCategory = false }) {
  return (
    <motion.ul className="service-grid" layout>
      <AnimatePresence mode="popLayout">
        {services.map((service, index) => (
          <motion.li
            key={service.id}
            layout
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -40px 0px' }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.45, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <ServiceCard service={service} categoryLabel={showCategory ? categoryLabels[service.category] : undefined} />
          </motion.li>
        ))}
      </AnimatePresence>
    </motion.ul>
  );
}

export default ServiceGrid;
