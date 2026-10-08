import StatCard from './StatCard';
import { statsData } from '../../data/companyData';
import ArchitecturalBackground from '../common/ArchitecturalBackground';
import './StatsSection.css';

/**
 * Animated statistics band. Values come from statsData in companyData.js.
 */
function StatsSection() {
  return (
    <section className="stats" aria-label="Company statistics">
      <ArchitecturalBackground position="left" />
      <div className="container">
        <div className="stats__grid">
          {statsData.map((stat, index) => (
            <StatCard key={stat.id} index={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
