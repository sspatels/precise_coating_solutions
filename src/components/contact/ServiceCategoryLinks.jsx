import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Reveal from '../common/Reveal';
import { serviceCategories, services } from '../../data/servicesData';
import ArchitecturalBackground from '../common/ArchitecturalBackground';
import './ServiceCategoryLinks.css';

/**
 * Contact page: quick links to each service category with service counts.
 */
function ServiceCategoryLinks() {
  const categories = serviceCategories.filter((category) => category.id !== 'all');

  return (
    <section className="section section--light" aria-label="Service categories">
      <ArchitecturalBackground position="left" />
      <div className="container">
        <SectionHeading
          eyebrow="How Can We Help?"
          title="Explore Our"
          highlight="Service Categories"
          text="Not sure which service you need? Our team will inspect the site and recommend the right system."
        />
        <ul className="category-links">
          {categories.map((category, index) => {
            const Icon = category.icon ?? ShieldCheck;
            const count = services.filter((service) => service.category === category.id).length;
            return (
              <Reveal as="li" key={category.id} delay={index * 0.06}>
                <Link to={`/services?category=${category.id}`} className="category-link">
                  <span className="category-link__icon">
                    <Icon size={26} aria-hidden="true" />
                  </span>
                  <span className="category-link__name">{category.label}</span>
                  <span className="category-link__count">
                    {count} {count === 1 ? 'service' : 'services'}
                  </span>
                  <ArrowRight className="category-link__arrow" size={18} aria-hidden="true" />
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default ServiceCategoryLinks;
