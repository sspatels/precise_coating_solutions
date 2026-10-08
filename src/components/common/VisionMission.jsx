import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { visionMission } from '../../data/companyData';
import './VisionMission.css';

/**
 * Vision & Mission on a navy background.
 * Shared by Home and About.
 */
function VisionMission() {
  return (
    <section className="vm" aria-label="Our vision and mission">
      <span className="vm__scan" aria-hidden="true" />
      <div className="container">
        <SectionHeading
          eyebrow="Who We Are"
          title="Protect structures. Prevent damage."
          highlight="Build a stronger, leak-free tomorrow."
          light
        />
        <div className="vm__grid">
          {visionMission.map(({ id, title, text, icon: Icon }, index) => (
            <Reveal key={id} delay={index * 0.12} className="vm-card">
              <span className="vm-card__icon">
                <Icon size={28} aria-hidden="true" />
              </span>
              <h3 className="vm-card__title">{title}</h3>
              <p className="vm-card__text">{text}</p>
              <span className="vm-card__corner" aria-hidden="true" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
