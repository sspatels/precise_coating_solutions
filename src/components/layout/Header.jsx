import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Mail, Menu, Phone, X } from 'lucide-react';
import Logo from '../common/Logo';
import Button from '../common/Button';
import { headerCta, navigationLinks } from '../../data/navigationData';
import { companyData } from '../../data/companyData';
import { WhatsAppIcon } from '../common/ContactIcon';
import './Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  // The menu stays open only for the route it was opened on, so navigating closes it automatically.
  const [menuPath, setMenuPath] = useState(null);
  const isMenuOpen = menuPath === pathname;
  const closeMenu = () => setMenuPath(null);

  // Compact header after scrolling
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll + close on Escape while the drawer is open
  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const onKey = (event) => event.key === 'Escape' && setMenuPath(null);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isMenuOpen]);

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <Logo variant="header" />

        <nav className="header__nav" aria-label="Main navigation">
          <ul className="header__links">
            {navigationLinks.map((link) => (
              <li key={link.id}>
                <NavLink to={link.path} end={link.path === '/'} className="header__link">
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <Button to={headerCta.path} variant="dark" className="header__cta">
            {headerCta.label}
          </Button>
          <button
            type="button"
            className="header__toggle"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuPath(isMenuOpen ? null : pathname)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="mobile-menu__backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              aria-hidden="true"
            />
            <motion.nav
              id="mobile-menu"
              className="mobile-menu"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <ul className="mobile-menu__links">
                {navigationLinks.map((link, index) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index + 0.1 }}
                  >
                    <NavLink to={link.path} end={link.path === '/'} className="mobile-menu__link" onClick={closeMenu}>
                      {link.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
              <Button to={headerCta.path} size="lg" className="mobile-menu__cta" onClick={closeMenu}>
                {headerCta.label}
              </Button>
              <div className="mobile-menu__contact">
                <a href={companyData.phoneHref}>
                  <Phone size={16} aria-hidden="true" /> {companyData.phone}
                </a>
                <a href={companyData.whatsappHref} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon size={16} /> WhatsApp: {companyData.phone}
                </a>
                <a href={companyData.emailHref}>
                  <Mail size={16} aria-hidden="true" /> {companyData.email}
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
