import { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin, X } from 'lucide-react';
import SmartImage from '../common/SmartImage';
import Watermark from './Watermark';
import './GalleryLightbox.css';

const SWIPE_THRESHOLD = 50;

/**
 * Accessible fullscreen viewer for photos and videos: Esc closes, ←/→ navigate, swipe on mobile,
 * focus is trapped inside and returned to the trigger on close.
 */
function GalleryLightbox({ items, index, categoryLabels, onClose, onChange }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const touchStartX = useRef(null);
  const isOpen = index !== null && index >= 0 && index < items.length;
  const item = isOpen ? items[index] : null;

  const showNext = useCallback(() => onChange((index + 1) % items.length), [index, items.length, onChange]);
  const showPrev = useCallback(
    () => onChange((index - 1 + items.length) % items.length),
    [index, items.length, onChange],
  );

  // Lock scroll, move focus in, and restore it on close
  useEffect(() => {
    if (!isOpen) return undefined;
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = '';
      previouslyFocused?.focus?.({ preventScroll: true });
    };
  }, [isOpen]);

  // Keyboard: Esc, arrows and focus trap
  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') showNext();
      if (event.key === 'ArrowLeft') showPrev();
      if (event.key === 'Tab') {
        const focusable = dialogRef.current?.querySelectorAll('button, video');
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose, showNext, showPrev]);

  const onTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const onTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    if (delta > SWIPE_THRESHOLD) showPrev();
    if (delta < -SWIPE_THRESHOLD) showNext();
    touchStartX.current = null;
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${item.title} – ${index + 1} of ${items.length}`}
          ref={dialogRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(event) => event.target === event.currentTarget && onClose()}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button type="button" className="lightbox__close" onClick={onClose} aria-label="Close" ref={closeRef}>
            <X size={24} />
          </button>

          <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={showPrev} aria-label="Previous">
            <ChevronLeft size={28} />
          </button>

          <motion.figure
            key={item.id}
            className="lightbox__figure"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="lightbox__media">
              {item.type === 'video' ? (
                <video
                  className="lightbox__video"
                  src={item.src}
                  controls
                  autoPlay
                  playsInline
                  controlsList="nodownload"
                  aria-label={item.title}
                />
              ) : (
                <SmartImage src={item.src} alt={item.title} eager />
              )}
              <Watermark size="lg" />
            </div>
            <figcaption className="lightbox__caption">
              <div>
                <span className="lightbox__category">{categoryLabels[item.category]}</span>
                <h2 className="lightbox__title">{item.title}</h2>
                <p className="lightbox__desc">{item.description}</p>
              </div>
              <div className="lightbox__meta">
                {item.location && (
                  <span>
                    <MapPin size={16} aria-hidden="true" /> {item.location}
                  </span>
                )}
                <span className="lightbox__counter">
                  {index + 1} / {items.length}
                </span>
              </div>
            </figcaption>
          </motion.figure>

          <button type="button" className="lightbox__nav lightbox__nav--next" onClick={showNext} aria-label="Next">
            <ChevronRight size={28} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

export default GalleryLightbox;
