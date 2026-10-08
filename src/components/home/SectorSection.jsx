import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Reveal from '../common/Reveal';
import SmartImage from '../common/SmartImage';
import ArchitecturalBackground from '../common/ArchitecturalBackground';
import { projectSectors } from '../../data/servicesData';
import { homeIntro } from '../../data/contentData';
import './SectorSection.css';

/**
 * Home intro (centred heading + paragraph) followed by Residential / Commercial / Industrial cards. One card is highlighted (orange);
 * hovering or focusing another card moves the highlight.
 */
function SectorSection() {
  const [activeId, setActiveId] = useState(projectSectors[0].id);

  return (
    <section className="section sectors" aria-labelledby="sectors-title">
      <ArchitecturalBackground position="right" />
      <div className="container">
        <div id="sectors-title" className="sectors__intro">
          <SectionHeading title={homeIntro.titleStart} highlight={homeIntro.titleHighlight} text={homeIntro.text} />
        </div>

        <div className="sectors__grid">
          {projectSectors.map(({ id, name, description, image, icon: Icon }, index) => (
            <Reveal key={id} delay={index * 0.1}>
              <Link
                to="/services"
                className={`sector-card ${activeId === id ? 'is-active' : ''}`}
                onMouseEnter={() => setActiveId(id)}
                onFocus={() => setActiveId(id)}
              >
                <div className="sector-card__media">
                  <SmartImage src={image} alt={`${name} waterproofing project`} icon={Icon} />
                  <span className="sector-card__shade" aria-hidden="true" />
                  <span className="sector-card__num" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="sector-card__body">
                  <span className="sector-card__icon">
                    <Icon size={28} aria-hidden="true" />
                  </span>
                  <h3 className="sector-card__title">{name}</h3>
                  <p className="sector-card__text">{description}</p>
                  <span className="sector-card__link">
                    View Services <ArrowRight size={18} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectorSection;
