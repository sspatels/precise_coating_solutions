import Seo from '../components/common/Seo';
import CTASection from '../components/common/CTASection';
import ArchitecturalBackground from '../components/common/ArchitecturalBackground';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import LocationMap from '../components/contact/LocationMap';
import ServiceCategoryLinks from '../components/contact/ServiceCategoryLinks';
import { seoData } from '../data/contentData';
import './Contact.css';

function Contact() {
  return (
    <>
      <Seo {...seoData.contact} />

      <section className="section contact-page" aria-labelledby="contact-title">
        <ArchitecturalBackground position="left" />
        <h1 id="contact-title" className="sr-only">
          Contact Us
        </h1>
        <div className="container contact-layout">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>

      <LocationMap />
      <ServiceCategoryLinks />
      <CTASection />
    </>
  );
}

export default Contact;
