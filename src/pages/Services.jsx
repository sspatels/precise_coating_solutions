import Seo from '../components/common/Seo';
import SectionHeading from '../components/common/SectionHeading';
import CTASection from '../components/common/CTASection';
import ArchitecturalBackground from '../components/common/ArchitecturalBackground';
import ServicesIntro from '../components/services/ServicesIntro';
import ServiceGrid from '../components/services/ServiceGrid';
import ServiceCarousel from '../components/services/ServiceCarousel';
import { services } from '../data/servicesData';
import './Services.css';
import { seoData } from '../data/contentData';

// Grid shows a short selection (2 rows of 3 on desktop); the slider above shows every service with a photo
const GRID_LIMIT = 6;
// Only services with a real photo are shown; the rest appear automatically once a photo is added
const servicesWithPhotos = services.filter((service) => service.image);
const gridServices = servicesWithPhotos.slice(0, GRID_LIMIT);

function Services() {
  return (
    <>
      <Seo {...seoData.services} />

      {/* Page opens with a single heading, then the services photo slider */}
      <section className="section services-slider" aria-labelledby="services-title">
        <ArchitecturalBackground position="right" />
        <div className="container">
          <h1 id="services-title" className="services-slider__title">
            Solutions That <span className="text-orange">Last</span>
          </h1>
          <ServiceCarousel services={servicesWithPhotos} />
        </div>
      </section>

      <ServicesIntro />

      <section className="section section--light" id="all-services" aria-label="All services">
        <ArchitecturalBackground position="left" />
        <div className="container">
          <SectionHeading
            eyebrow="What We Offer"
            title="Complete Range of"
            highlight="Services"
            text="Durable, system-based solutions for every part of your structure."
          />
          <ServiceGrid services={gridServices} showCategory />
        </div>
      </section>

      <CTASection />
    </>
  );
}

export default Services;
