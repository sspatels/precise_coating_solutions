import { AnimatePresence, motion } from 'framer-motion';
import GalleryCard from './GalleryCard';
import VideoCard from './VideoCard';
import './GalleryGrid.css';

/**
 * Masonry-style grid for photos and videos (portrait items span two rows). 3 / 2 / 1 columns.
 */
function GalleryGrid({ items, categoryLabels, onOpen, emptyText = 'No items in this category yet.' }) {
  if (items.length === 0) {
    return <p className="gallery-grid__empty">{emptyText}</p>;
  }

  return (
    <motion.ul className="gallery-grid" layout>
      <AnimatePresence mode="popLayout">
        {items.map((item, index) => {
          const Card = item.type === 'video' ? VideoCard : GalleryCard;
          return (
            <motion.li
              key={item.id}
              layout
              className={item.orientation === 'portrait' ? 'gallery-grid__item--tall' : undefined}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.35), ease: [0.22, 1, 0.36, 1] }}
            >
              <Card item={item} categoryLabel={categoryLabels[item.category]} onOpen={() => onOpen(index)} />
            </motion.li>
          );
        })}
      </AnimatePresence>
    </motion.ul>
  );
}

export default GalleryGrid;
