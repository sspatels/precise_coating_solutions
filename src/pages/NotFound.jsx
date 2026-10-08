import Seo from '../components/common/Seo';
import PageBanner from '../components/common/PageBanner';
import Button from '../components/common/Button';
import { companyData } from '../data/companyData';

function NotFound() {
  return (
    <>
      <Seo title={`Page Not Found | ${companyData.name}`} description="The page you are looking for does not exist." />
      <PageBanner
        breadcrumb="404"
        eyebrow="Error 404"
        title="Page"
        highlight="Not Found"
        subtitle="The page you are looking for may have been moved or no longer exists."
      />
      <div className="container" style={{ paddingBlock: '48px', display: 'flex', justifyContent: 'center' }}>
        <Button to="/" size="lg">
          Back to Home
        </Button>
      </div>
    </>
  );
}

export default NotFound;
