import SectionHeading from '../common/SectionHeading';
import Reveal from '../common/Reveal';
import { approachSteps } from '../../data/contentData';
import { companyData } from '../../data/companyData';
import ArchitecturalBackground from '../common/ArchitecturalBackground';
import './ServicesIntro.css';

/**
 * Services intro: company positioning + the 5-step working approach.
 */
function ServicesIntro() {
  return (
    <section className="section services-intro" aria-label="Our approach">
      <ArchitecturalBackground position="right" />
      <div className="container services-intro__layout">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Our Approach"
            title="Right System."
            highlight="Right Solution."
            text={companyData.description}
          />
          <Reveal as="p" className="services-intro__note" delay={0.1}>
            Every project starts with understanding the site condition. We then select the right system and
            follow a disciplined application process — so the protection lasts.
          </Reveal>
        </div>

        <ol className="services-intro__steps">
          {approachSteps.map(({ id, label, icon: Icon }, index) => (
            <Reveal as="li" key={id} delay={index * 0.08} className="approach-step">
              <span className="approach-step__num">{String(index + 1).padStart(2, '0')}</span>
              <span className="approach-step__icon">
                <Icon size={22} aria-hidden="true" />
              </span>
              <span className="approach-step__label">{label}</span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default ServicesIntro;
