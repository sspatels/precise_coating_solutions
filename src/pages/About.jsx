import Seo from '../components/common/Seo';
import CTASection from '../components/common/CTASection';
import AboutHero from '../components/about/AboutHero';
import AboutIntro from '../components/about/AboutIntro';
import AboutWhyChoose from '../components/about/AboutWhyChoose';
import StatsSection from '../components/about/StatsSection';
import BrandsSection from '../components/about/BrandsSection';
import { seoData } from '../data/contentData';
import './About.css';

function About() {
  return (
    <>
      <Seo {...seoData.about} />
      {/* Banner stays pinned while the content below slides up over it */}
      <AboutHero />
      {/* Scroll space where only the banner text clears, before the content slides up */}
      <div className="about-runway" aria-hidden="true" />
      <div className="about-cover">
        <AboutIntro />
        <AboutWhyChoose />
        <StatsSection />
        <BrandsSection />
        <CTASection />
      </div>
    </>
  );
}

export default About;
