import Seo from '../components/common/Seo';
import CTASection from '../components/common/CTASection';
import VisionMission from '../components/common/VisionMission';
import HomeHero from '../components/home/HomeHero';
import SectorSection from '../components/home/SectorSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import QuickContact from '../components/common/QuickContact';
import { seoData } from '../data/contentData';

function Home() {
  return (
    <>
      <Seo {...seoData.home} />
      <HomeHero />
      <SectorSection />
      <WhyChooseUs />
      <VisionMission />
      <QuickContact />
      <CTASection />
    </>
  );
}

export default Home;
