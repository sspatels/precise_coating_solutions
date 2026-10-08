import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Clapperboard, Images } from 'lucide-react';
import './GalleryTabs.css';

const tabIcons = { photos: Images, videos: Clapperboard };

/**
 * Photos / Videos switcher with a sliding orange indicator.
 * Accessible tabs: arrow keys move between tabs.
 */
function GalleryTabs({ tabs, active, onChange }) {
  const listRef = useRef(null);

  const onKeyDown = (event) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    const index = tabs.findIndex((tab) => tab.id === active);
    const next = (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    onChange(tabs[next].id);
    listRef.current?.querySelectorAll('[role="tab"]')[next]?.focus();
  };

  return (
    <div className="gallery-tabs" role="tablist" aria-label="Gallery type" ref={listRef} onKeyDown={onKeyDown}>
      {tabs.map((tab) => {
        const Icon = tabIcons[tab.id] ?? Images;
        const isActive = tab.id === active;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`gallery-tab-${tab.id}`}
            aria-selected={isActive}
            aria-controls={`gallery-panel-${tab.id}`}
            tabIndex={isActive ? 0 : -1}
            className={`gallery-tabs__tab ${isActive ? 'is-active' : ''}`}
            onClick={() => onChange(tab.id)}
          >
            {isActive && (
              <motion.span
                layoutId="gallery-tab-indicator"
                className="gallery-tabs__indicator"
                transition={{ type: 'spring', stiffness: 420, damping: 34 }}
              />
            )}
            <span className="gallery-tabs__content">
              <Icon size={20} aria-hidden="true" />
              {tab.label}
              <span className="gallery-tabs__count">{tab.items.length}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default GalleryTabs;
