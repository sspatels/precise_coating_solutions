import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Seo from '../components/common/Seo';
import CTASection from '../components/common/CTASection';
import ArchitecturalBackground from '../components/common/ArchitecturalBackground';
import GalleryTabs from '../components/gallery/GalleryTabs';
import GalleryGrid from '../components/gallery/GalleryGrid';
import GalleryLightbox from '../components/gallery/GalleryLightbox';
import { galleryCategories, galleryTabs } from '../data/galleryData';
import { seoData } from '../data/contentData';
import './Gallery.css';

const categoryLabels = Object.fromEntries(galleryCategories.map((c) => [c.id, c.label]));

function Gallery() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedTab = searchParams.get('tab');
  const activeTab = galleryTabs.some((tab) => tab.id === requestedTab) ? requestedTab : galleryTabs[0].id;
  const tab = galleryTabs.find((t) => t.id === activeTab);

  const [lightboxIndex, setLightboxIndex] = useState(null);

  const changeTab = (id) => {
    setLightboxIndex(null);
    setSearchParams(id === galleryTabs[0].id ? {} : { tab: id }, { replace: true, preventScrollReset: true });
  };

  const closeLightbox = () => setLightboxIndex(null);

  return (
    <>
      <Seo {...seoData.gallery} />
      {/* Page starts directly with the Photos / Videos tabs */}
      <section className="section gallery-page" aria-labelledby="gallery-title">
        <ArchitecturalBackground position="right" />
        <div className="container">
          <h1 id="gallery-title" className="sr-only">
            Our Recent Projects
          </h1>
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <GalleryTabs tabs={galleryTabs} active={activeTab} onChange={changeTab} />
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              id={`gallery-panel-${activeTab}`}
              role="tabpanel"
              aria-labelledby={`gallery-tab-${activeTab}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <GalleryGrid
                items={tab.items}
                categoryLabels={categoryLabels}
                onOpen={setLightboxIndex}
                emptyText={`No ${tab.label.toLowerCase()} added yet.`}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <GalleryLightbox
        items={tab.items}
        index={lightboxIndex}
        categoryLabels={categoryLabels}
        onClose={closeLightbox}
        onChange={setLightboxIndex}
      />

      <CTASection />
    </>
  );
}

export default Gallery;
