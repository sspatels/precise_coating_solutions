import { motion } from 'framer-motion';

/**
 * Fade-up on scroll wrapper. Keep `delay` small (≤ 0.4s) for a calm, corporate feel.
 */
function Reveal({ children, delay = 0, y = 24, as = 'div', className = '', ...rest }) {
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export default Reveal;
