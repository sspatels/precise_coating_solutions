import { useEffect, useRef, useState } from 'react';
import './ArchitecturalBackground.css';

/* ----------------------------------------------------------
   Perspective (isometric) building wireframes
   ---------------------------------------------------------- */
const SCALE = 34; // px per unit
const ORIGIN = { x: 800, y: 0 };
const COS30 = Math.cos(Math.PI / 6);

// Project a 3D point (x, y on the ground, z up) to 2D
const iso = (x, y, z = 0) => [
  +(ORIGIN.x + (x - y) * COS30 * SCALE).toFixed(1),
  +(ORIGIN.y + (x + y) * 0.5 * SCALE - z * SCALE).toFixed(1),
];
const line = (a, b) => `M${a[0]} ${a[1]} L${b[0]} ${b[1]}`;

/** Building masses: position (x, y), footprint (w, d), height (h), floor height, bay width */
const BLOCKS = [
  { x: -6, y: 10, w: 5, d: 6, h: 28, floor: 1.6, bay: 1.7 },
  { x: 4, y: 14, w: 8, d: 6, h: 22, floor: 1.5, bay: 2 },
  { x: 14, y: 6, w: 7, d: 7, h: 18, floor: 1.5, bay: 1.75 },
  { x: 28, y: 0, w: 6, d: 6, h: 24, floor: 1.6, bay: 2 },
  { x: 2, y: 24, w: 10, d: 5, h: 8, floor: 2, bay: 2.5 },
  { x: 22, y: 16, w: 9, d: 6, h: 10, floor: 2, bay: 2.25 },
  { x: 12, y: 26, w: 8, d: 6, h: 5, floor: 2.5, bay: 2 },
  { x: 20, y: -6, w: 6, d: 5, h: 12, floor: 1.5, bay: 2 },
];

/** Long dashed construction lines along the two ground axes */
const GUIDES = [
  { from: [-20, 20, 0], to: [50, 20, 0] },
  { from: [-20, 30, 0], to: [50, 30, 0] },
  { from: [12, -20, 0], to: [12, 50, 0] },
  { from: [31, -20, 0], to: [31, 50, 0] },
  { from: [-20, 13, 6], to: [50, 13, 6] },
];

function buildDrawing() {
  const main = [];
  const thin = [];

  BLOCKS.forEach(({ x, y, w, d, h, floor, bay }) => {
    const x2 = x + w;
    const y2 = y + d;
    // Roof outline
    main.push(line(iso(x, y, h), iso(x2, y, h)), line(iso(x2, y, h), iso(x2, y2, h)));
    main.push(line(iso(x2, y2, h), iso(x, y2, h)), line(iso(x, y2, h), iso(x, y, h)));
    // Visible vertical edges
    main.push(line(iso(x2, y, 0), iso(x2, y, h)), line(iso(x2, y2, 0), iso(x2, y2, h)), line(iso(x, y2, 0), iso(x, y2, h)));
    // Base
    main.push(line(iso(x, y2, 0), iso(x2, y2, 0)), line(iso(x2, y2, 0), iso(x2, y, 0)));
    // Floor lines on both visible faces
    for (let z = floor; z < h; z += floor) {
      thin.push(line(iso(x, y2, z), iso(x2, y2, z)), line(iso(x2, y2, z), iso(x2, y, z)));
    }
    // Mullions
    for (let i = x + bay; i < x2; i += bay) thin.push(line(iso(i, y2, 0), iso(i, y2, h)));
    for (let j = y + bay; j < y2; j += bay) thin.push(line(iso(x2, j, 0), iso(x2, j, h)));
  });

  const guides = GUIDES.map(({ from, to }) => line(iso(...from), iso(...to)));
  return { main, thin, guides };
}

// The drawing is static, so it is computed once for every instance
const DRAWING = buildDrawing();

// Height of one drawing tile, matching the size of the drawing in a typical Home page section
const TILE_HEIGHT = 900;

/** One copy of the drawing (tiles alternate direction for variety) */
function DrawingTile({ index }) {
  return (
    <svg
      className={`arch-bg__svg ${index % 2 ? 'arch-bg__svg--flip' : ''}`}
      style={{ top: index * TILE_HEIGHT }}
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      {DRAWING.guides.map((d, i) => (
        <path key={`g-${i}`} className="arch-line arch-line--dim" d={d} />
      ))}
      {DRAWING.thin.map((d, i) => (
        <path key={`t-${i}`} className="arch-line arch-line--thin" d={d} pathLength="1" />
      ))}
      {DRAWING.main.map((d, i) => (
        <path key={`m-${i}`} className="arch-line" d={d} pathLength="1" />
      ))}
    </svg>
  );
}

/**
 * Animated blueprint background: perspective building wireframes that fill the section.
 * The drawing keeps the same scale on every page; tall sections (e.g. Gallery, Services grid)
 * repeat it in tiles instead of stretching it.
 * Lines draw in when the section scrolls into view, then the drawing floats gently,
 * dashed construction lines flow and an orange scan line sweeps across.
 *
 * @param {'right'|'left'|'center'|'full'} position  'left' mirrors the drawing for variety
 * @param {'light'|'dark'|'white'} tone   line colour (white = over photos)
 * @param {boolean} animated      enable the animations
 * @param {number} opacity        overall strength (0.15 – 0.3 recommended on white)
 */
function ArchitecturalBackground({ position = 'right', tone = 'light', animated = true, opacity = 0.22 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [tiles, setTiles] = useState(1);

  // Repeat the drawing to cover the full section height
  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new ResizeObserver(([entry]) => {
      setTiles(Math.max(1, Math.ceil(entry.contentRect.height / TILE_HEIGHT)));
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!animated || !node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [animated]);

  const classes = [
    'arch-bg',
    `arch-bg--${position}`,
    `arch-bg--${tone}`,
    animated && 'arch-bg--animated',
    isVisible && 'is-visible',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={ref} className={classes} style={{ '--arch-opacity': opacity }} aria-hidden="true">
      <span className="arch-bg__scan" />
      <div className="arch-bg__drawing">
        {Array.from({ length: tiles }, (_, index) => (
          <DrawingTile key={index} index={index} />
        ))}
      </div>
    </div>
  );
}

export default ArchitecturalBackground;
