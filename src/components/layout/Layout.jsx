import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import FloatingContact from '../common/FloatingContact';

/**
 * Site shell: header, animated page outlet, footer and floating contact buttons.
 */
function Layout() {
  const { pathname } = useLocation();
  // The floating navbar is fixed. Pages that open with a full-bleed hero image
  // (Home, About) let the image run up behind the navbar; the rest get tight
  // top clearance so their first section sits just below the navbar.
  const heroRoutes = ['/', '/about'];
  const hasHero = heroRoutes.includes(pathname);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <motion.main
        id="main"
        className={`site-main ${hasHero ? '' : 'site-main--offset'}`}
        key={pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <Outlet />
      </motion.main>
      <Footer />
      <ScrollToTop />
      <FloatingContact />
    </>
  );
}

export default Layout;
