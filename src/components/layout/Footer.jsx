import { Link } from 'react-router-dom';
import { BadgeCheck, ChevronRight, FileText, Globe, Mail, MapPin, Phone } from 'lucide-react';
import { WhatsAppIcon } from '../common/ContactIcon';
import { companyData } from '../../data/companyData';
import { footerServiceLinks, navigationLinks } from '../../data/navigationData';
import './Footer.css';

const socialLabels = { facebook: 'Facebook', instagram: 'Instagram', linkedin: 'LinkedIn', youtube: 'YouTube' };

function FooterLinkList({ title, links }) {
  return (
    <div className="footer__col">
      <h3 className="footer__heading">{title}</h3>
      <ul className="footer__list">
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.path} className="footer__link">
              <ChevronRight size={13} aria-hidden="true" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Compact footer – all content from companyData / navigationData.
 */
function Footer() {
  const { founder } = companyData;
  const socialLinks = Object.entries(companyData.social).filter(([, url]) => Boolean(url));

  const contactItems = [
    { id: 'phone', icon: Phone, href: companyData.phoneHref, text: companyData.phone },
    { id: 'whatsapp', icon: WhatsAppIcon, href: companyData.whatsappHref, text: 'Chat on WhatsApp', external: true },
    { id: 'email', icon: Mail, href: companyData.emailHref, text: companyData.email },
    { id: 'website', icon: Globe, href: companyData.websiteHref, text: companyData.website, external: true },
    { id: 'address', icon: MapPin, text: companyData.address },
  ];

  return (
    <footer className="footer">
      <div className="container footer__grid">
        {/* Brand */}
        <div className="footer__brand">
          <Link to="/" className="footer__logo" aria-label={`${companyData.name} – Home`}>
            <img src={companyData.logoTransparent} alt={companyData.name} width="797" height="564" />
          </Link>
          <p className="footer__subtitle">{companyData.subtitle}</p>
          <p className="footer__meta">
            <BadgeCheck size={15} aria-hidden="true" />
            <span>
              <strong>{founder.name}</strong> · {founder.role}
            </span>
          </p>
          <p className="footer__meta">
            <FileText size={15} aria-hidden="true" />
            <span>
              GSTIN: <strong>{companyData.gstin}</strong>
            </span>
          </p>
          {socialLinks.length > 0 && (
            <ul className="footer__social" aria-label="Social media">
              {socialLinks.map(([key, url]) => (
                <li key={key}>
                  <a href={url} target="_blank" rel="noopener noreferrer" aria-label={socialLabels[key] ?? key}>
                    <Globe size={16} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <FooterLinkList title="Quick Links" links={navigationLinks} />
        <FooterLinkList title="Our Services" links={footerServiceLinks} />

        {/* Contact */}
        <div className="footer__col">
          <h3 className="footer__heading">Contact Us</h3>
          <ul className="footer__contact">
            {contactItems.map(({ id, icon: Icon, href, text, external }) => (
              <li key={id}>
                <Icon size={15} aria-hidden="true" />
                {href ? (
                  <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                    {text}
                  </a>
                ) : (
                  <span>{text}</span>
                )}
              </li>
            ))}
          </ul>
          <p className="footer__serving">Serving {companyData.servingSectors.join(' · ')} Projects</p>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>
            © {companyData.copyrightYear} {companyData.name}. All Rights Reserved.
          </p>
          <p className="footer__closing">{companyData.closingLine}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
