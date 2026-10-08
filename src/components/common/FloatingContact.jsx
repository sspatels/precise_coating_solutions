import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import ContactIcon from './ContactIcon';
import { contactChannels } from '../../data/companyData';
import './FloatingContact.css';

const ease = [0.22, 1, 0.36, 1];

/**
 * Contact shortcuts on every page: floating Call / Email / WhatsApp buttons on the right edge
 * (desktop/tablet) and a sticky bottom action bar on phones, so nothing covers page content.
 * WhatsApp is the main button; a short "Chat with us" bubble appears once after a few seconds.
 */
function FloatingContact() {
  const [showBubble, setShowBubble] = useState(false);
  const whatsapp = contactChannels.find((c) => c.id === 'whatsapp');
  const others = contactChannels.filter((c) => c.id !== 'whatsapp');

  useEffect(() => {
    const show = setTimeout(() => setShowBubble(true), 3500);
    const hide = setTimeout(() => setShowBubble(false), 11000);
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, []);

  return (
    <>
      {/* Mobile: sticky bottom action bar */}
      <nav className="action-bar" aria-label="Quick contact">
        {contactChannels.map((channel) => (
          <a
            key={channel.id}
            href={channel.href}
            className={`action-bar__btn action-bar__btn--${channel.id}`}
            {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <ContactIcon id={channel.id} size={18} />
            <span>{channel.shortLabel}</span>
          </a>
        ))}
      </nav>

      {/* Desktop / tablet: floating buttons */}
      <div className="float-contact" role="group" aria-label="Contact us">
        {others.map((channel, index) => (
          <motion.a
            key={channel.id}
            href={channel.href}
            className={`float-contact__btn float-contact__btn--${channel.id}`}
            aria-label={`${channel.label}: ${channel.value}`}
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 + index * 0.12, ease }}
          >
            <ContactIcon id={channel.id} size={16} />
            <span className="float-contact__label">{channel.action}</span>
          </motion.a>
        ))}

        <div className="float-contact__main">
          <AnimatePresence>
            {showBubble && (
              <motion.div
                className="float-contact__bubble"
                initial={{ opacity: 0, x: 12, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 12, scale: 0.9 }}
                transition={{ duration: 0.35, ease }}
              >
                <span>
                  Need help? <strong>Chat with us</strong>
                </span>
                <button type="button" onClick={() => setShowBubble(false)} aria-label="Dismiss message">
                  <X size={14} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.a
            href={whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="float-contact__btn float-contact__btn--whatsapp"
            aria-label={`Chat on WhatsApp: ${whatsapp.value}`}
            initial={{ opacity: 0, scale: 0.4, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease }}
          >
            <span className="float-contact__ring" aria-hidden="true" />
            <span className="float-contact__ring float-contact__ring--delay" aria-hidden="true" />
            <ContactIcon id="whatsapp" size={18} />
          </motion.a>
        </div>
      </div>
    </>
  );
}

export default FloatingContact;
