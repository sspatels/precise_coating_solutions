import { CircleCheck } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import WhyChooseCard from '../common/WhyChooseCard';
import ArchitecturalBackground from '../common/ArchitecturalBackground';
import Reveal from '../common/Reveal';
import Button from '../common/Button';
import { whyChooseData } from '../../data/contentData';
import { companyData } from '../../data/companyData';
import './WhyChooseUs.css';

/**
 * Home "Why Choose Us": intro panel + feature cards.
 */
function WhyChooseUs() {
  return (
    <section className="section why" aria-label="Why choose us">
      <ArchitecturalBackground position="left" />
      <div className="container why__layout">
        <Reveal className="why__intro">
          <SectionHeading
            align="left"
            eyebrow="Why Choose Us"
            title="Why Choose"
            highlight="Precise Coating Solutions?"
            text="We treat leakage at its root. Every project follows a disciplined process so the protection lasts for years — not just one season."
          />
          <ul className="why__goals">
            {companyData.coreGoal.map((goal) => (
              <li key={goal}>
                <CircleCheck size={20} aria-hidden="true" />
                {goal}
              </li>
            ))}
          </ul>
          <Button to="/about" size="lg">
            More About Us
          </Button>
        </Reveal>

        <div className="why__grid">
          {whyChooseData.map((item, index) => (
            <WhyChooseCard key={item.id} index={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
