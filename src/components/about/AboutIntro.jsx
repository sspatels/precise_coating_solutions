import { CircleCheck } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Reveal from '../common/Reveal';
import { approachSteps } from '../../data/contentData';
import { companyData } from '../../data/companyData';
import ArchitecturalBackground from '../common/ArchitecturalBackground';
import './AboutIntro.css';

/**
 * Company introduction: what we do + how we work.
 */
function AboutIntro() {
  return (
    <section className="section about-intro" aria-label="Company introduction">
      <ArchitecturalBackground position="left" />
      <div className="container about-intro__layout">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Who We Are"
            title="Reliable, Durable &"
            highlight="System-Based Solutions"
            text="We serve residential, commercial and industrial projects with solutions that address leakage and surface problems at their root — not just on the surface."
          />
          <Reveal as="ul" className="about-intro__offerings" delay={0.1}>
            {companyData.offerings.map((item) => (
              <li key={item}>
                <CircleCheck size={20} aria-hidden="true" />
                {item}
              </li>
            ))}
          </Reveal>
        </div>

        <Reveal className="about-intro__process" delay={0.15}>
          <h3 className="about-intro__process-title">Our Approach</h3>
          <ol>
            {approachSteps.map(({ id, label, icon: Icon }, index) => (
              <li key={id}>
                <span className="about-intro__step-icon">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span className="about-intro__step-text">
                  <small>Step {index + 1}</small>
                  {label}
                </span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

export default AboutIntro;
