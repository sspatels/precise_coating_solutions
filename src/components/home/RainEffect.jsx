import { useMemo } from 'react';
import './RainEffect.css';

// Small deterministic random generator so the drop layout is stable between renders
function seeded(seed) {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

/** Builds one layer of drops. Speed / length / brightness ranges differ per layer for depth. */
function makeDrops(count, seed, { speed, length, opacity }) {
  const random = seeded(seed);
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: random() * 104 - 2,
    delay: random() * -3,
    duration: speed[0] + random() * (speed[1] - speed[0]),
    length: length[0] + random() * (length[1] - length[0]),
    opacity: opacity[0] + random() * (opacity[1] - opacity[0]),
  }));
}

const LAYERS = [
  // far: dense shower of tiny, soft drops
  { name: 'far', count: 170, seed: 7, speed: [1.2, 1.6], length: [14, 24], opacity: [0.55, 0.85] },
  // near: slightly bigger, brighter small drops for depth
  { name: 'near', count: 70, seed: 19, speed: [0.9, 1.2], length: [24, 40], opacity: [0.75, 1] },
];

/**
 * Fine rain shower over the hero image – pure CSS animation (no canvas).
 * Two layers for depth, splashes along the ground and a soft mist.
 * Turned off automatically for users who prefer reduced motion.
 */
function RainEffect() {
  const layers = useMemo(() => LAYERS.map((layer) => ({ ...layer, drops: makeDrops(layer.count, layer.seed, layer) })), []);
  const splashes = useMemo(() => makeDrops(26, 31, { speed: [0.8, 1.3], length: [0, 0], opacity: [0.5, 0.9] }), []);

  return (
    <div className="rain" aria-hidden="true">
      <span className="rain__mist" />

      {layers.map((layer) => (
        <div key={layer.name} className={`rain__layer rain__layer--${layer.name}`}>
          {layer.drops.map((drop) => (
            <span
              key={drop.id}
              className="rain__drop"
              style={{
                left: `${drop.left}%`,
                height: `${drop.length}px`,
                opacity: drop.opacity,
                animationDuration: `${drop.duration}s`,
                animationDelay: `${drop.delay}s`,
              }}
            />
          ))}
        </div>
      ))}

      <div className="rain__splashes">
        {splashes.map((splash) => (
          <span
            key={splash.id}
            className="rain__splash"
            style={{
              left: `${splash.left}%`,
              bottom: `${4 + (splash.id % 5) * 3}%`,
              animationDuration: `${splash.duration}s`,
              animationDelay: `${splash.delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default RainEffect;
