import SectionHeading from '../common/SectionHeading';
import WhyChooseCard from '../common/WhyChooseCard';
import ArchitecturalBackground from '../common/ArchitecturalBackground';
import { whyChooseData } from '../../data/contentData';
import './AboutWhyChoose.css';

function AboutWhyChoose() {
  return (
    <section className="section section--light" aria-label="Why choose us">
      <ArchitecturalBackground position="center" />
      <div className="container">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Built Right."
          highlight="Built to Last."
          text="Our focus is on durable solutions that help protect structures and reduce recurring problems."
        />
        <div className="about-why__grid">
          {whyChooseData.map(({ id, title, text, aboutTitle, aboutText, icon }, index) => (
            <WhyChooseCard key={id} index={index} title={aboutTitle ?? title} text={aboutText ?? text} icon={icon} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutWhyChoose;
