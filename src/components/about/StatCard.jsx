import AnimatedCounter from './AnimatedCounter';
import Reveal from '../common/Reveal';

function StatCard({ value, suffix, label, index = 0 }) {
  return (
    <Reveal className="stat-card" delay={index * 0.1}>
      <strong className="stat-card__value">
        <AnimatedCounter value={value} suffix={suffix} />
      </strong>
      <span className="stat-card__label">{label}</span>
    </Reveal>
  );
}

export default StatCard;
