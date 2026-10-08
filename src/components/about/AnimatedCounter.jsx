import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';

/**
 * Counts from 0 to `value` once the number scrolls into view.
 */
function AnimatedCounter({ value, suffix = '', duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return undefined;
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [isInView, value, duration]);

  return (
    <span ref={ref} aria-label={`${value}${suffix}`}>
      <span aria-hidden="true">
        {display}
        {suffix}
      </span>
    </span>
  );
}

export default AnimatedCounter;
