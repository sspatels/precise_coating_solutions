import { Phone } from 'lucide-react';
import Button from './Button';
import Reveal from './Reveal';
import { ctaContent } from '../../data/contentData';
import { companyData } from '../../data/companyData';
import { WhatsAppIcon } from './ContactIcon';
import './CTASection.css';

/**
 * Full-width orange call-to-action band used at the bottom of every page.
 */
function CTASection({ title = ctaContent.title, text = ctaContent.text, button = ctaContent.button }) {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <span className="cta__lines" aria-hidden="true" />
      <span className="cta__corner" aria-hidden="true" />
      <div className="container">
        <Reveal className="cta__inner">
          <div className="cta__content">
            <h2 id="cta-title" className="cta__title">
              {title}
            </h2>
            <p className="cta__text">{text}</p>
          </div>
          <div className="cta__actions">
            <Button to={button.path} size="lg">
              {button.label}
            </Button>
            <div className="cta__direct">
              <a href={companyData.phoneHref} className="cta__phone">
                <Phone size={18} aria-hidden="true" />
                {companyData.phone}
              </a>
              <a
                href={companyData.whatsappHref}
                className="cta__phone cta__phone--whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon size={18} />
                WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default CTASection;
