import { ArrowRight, BadgeCheck } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import ArchitecturalBackground from './ArchitecturalBackground';
import ContactIcon from './ContactIcon';
import { companyData, contactChannels } from '../../data/companyData';
import './QuickContact.css';

/**
 * Direct contact section: Call / WhatsApp / Email cards with animated icons.
 * Used on the Home page; everything comes from companyData.
 */
function QuickContact() {
  const { founder } = companyData;

  return (
    <section className="section quick-contact" aria-label="Contact us directly">
      <ArchitecturalBackground position="left" />
      <div className="container">
        <SectionHeading
          eyebrow="Get in Touch"
          title="Talk to Us"
          highlight="Directly"
          text="Call, WhatsApp or email us for a site inspection or a free quote — we respond quickly."
        />

        <Reveal className="quick-contact__founder">
          <span className="quick-contact__avatar" aria-hidden="true">
            {founder.name
              .split(' ')
              .map((part) => part[0])
              .join('')}
          </span>
          <span>
            <strong>{founder.name}</strong>
            <small>
              <BadgeCheck size={14} aria-hidden="true" /> {founder.role}, {companyData.name}
            </small>
          </span>
        </Reveal>

        <ul className="quick-contact__grid">
          {contactChannels.map((channel, index) => (
            <Reveal as="li" key={channel.id} delay={index * 0.12}>
              <a
                href={channel.href}
                className={`qc-card qc-card--${channel.id}`}
                {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span className="qc-card__icon">
                  <span className="qc-card__ripple" aria-hidden="true" />
                  <span className="qc-card__ripple qc-card__ripple--late" aria-hidden="true" />
                  <ContactIcon id={channel.id} size={30} />
                </span>
                <span className="qc-card__label">{channel.label}</span>
                <span className="qc-card__value">{channel.value}</span>
                <span className="qc-card__note">{channel.note}</span>
                <span className="qc-card__action">
                  {channel.action} <ArrowRight size={17} aria-hidden="true" />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default QuickContact;
