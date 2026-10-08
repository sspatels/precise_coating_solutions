import { BadgeCheck, Clock, FileText, Globe, Mail, MapPin, Phone } from 'lucide-react';
import Reveal from '../common/Reveal';
import ContactIcon, { WhatsAppIcon } from '../common/ContactIcon';
import { companyData, contactChannels } from '../../data/companyData';
import './ContactInfo.css';

/**
 * Contact details panel – all values from companyData.js.
 */
function ContactInfo() {
  const { founder, workingHours } = companyData;

  const items = [
    {
      id: 'founder',
      label: founder.role,
      icon: BadgeCheck,
      content: <strong className="contact-info__strong">{founder.name}</strong>,
    },
    { id: 'phone', label: 'Mobile', icon: Phone, content: <a href={companyData.phoneHref}>{companyData.phone}</a> },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      icon: WhatsAppIcon,
      content: (
        <a href={companyData.whatsappHref} target="_blank" rel="noopener noreferrer">
          {companyData.phone}
        </a>
      ),
    },
    { id: 'email', label: 'Email', icon: Mail, content: <a href={companyData.emailHref}>{companyData.email}</a> },
    {
      id: 'website',
      label: 'Website',
      icon: Globe,
      content: (
        <a href={companyData.websiteHref} target="_blank" rel="noopener noreferrer">
          {companyData.website}
        </a>
      ),
    },
    { id: 'gstin', label: 'GSTIN', icon: FileText, content: <span className="contact-info__mono">{companyData.gstin}</span> },
    { id: 'location', label: 'Location', icon: MapPin, content: <address>{companyData.address}</address> },
    ...(workingHours.length
      ? [
          {
            id: 'hours',
            label: 'Working Hours',
            icon: Clock,
            content: (
              <ul>
                {workingHours.map((slot) => (
                  <li key={slot.days}>
                    {slot.days}: <strong>{slot.time}</strong>
                  </li>
                ))}
              </ul>
            ),
          },
        ]
      : []),
  ];

  return (
    <Reveal className="contact-info">
      <span className="eyebrow">Contact Information</span>
      <h2 className="contact-info__title">
        {companyData.name.split(' ').slice(0, -1).join(' ')}{' '}
        <span className="text-orange">{companyData.name.split(' ').slice(-1)}</span>
      </h2>
      <p className="contact-info__subtitle">{companyData.subtitle}</p>

      {/* One-tap actions */}
      <div className="contact-info__actions">
        {contactChannels.map((channel) => (
          <a
            key={channel.id}
            href={channel.href}
            className={`contact-info__action contact-info__action--${channel.id}`}
            {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <ContactIcon id={channel.id} size={18} />
            {channel.action}
          </a>
        ))}
      </div>

      <ul className="contact-info__list">
        {items.map(({ id, label, icon: Icon, content }) => (
          <li key={id} className={`contact-info__item contact-info__item--${id}`}>
            <span className="contact-info__icon">
              <Icon size={22} aria-hidden="true" />
            </span>
            <div>
              <h3 className="contact-info__label">{label}</h3>
              <div className="contact-info__value">{content}</div>
            </div>
          </li>
        ))}
      </ul>

      <p className="contact-info__serving">
        Serving <strong>{companyData.servingSectors.join(' | ')}</strong> Projects
      </p>
    </Reveal>
  );
}

export default ContactInfo;
