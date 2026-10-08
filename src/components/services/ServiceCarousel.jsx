import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ServiceSlide from './ServiceSlide';
import './ServiceCarousel.css';

const SPEED = 38; // px per second – slow, smooth and premium

/**
 * One auto-scrolling row. Items are duplicated so the loop is seamless.
 * Movement is time-based (same speed on 60Hz and 120Hz screens).
 * Pauses on hover, focus and touch; users can swipe/scroll manually or use the arrows.
 */
function CarouselRow({ items, reverse = false, label }) {
  const trackRef = useRef(null);
  const pausedRef = useRef(false);
  const positionRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const half = () => track.scrollWidth / 2;

    positionRef.current = reverse ? half() : 0;
    track.scrollLeft = positionRef.current;

    let frame;
    let last = performance.now();
    const tick = (now) => {
      const delta = Math.min(now - last, 64) / 1000; // cap after tab switches
      last = now;
      if (!pausedRef.current && !reduceMotion) {
        positionRef.current += (reverse ? -SPEED : SPEED) * delta;
        if (positionRef.current >= half()) positionRef.current -= half();
        if (positionRef.current <= 0) positionRef.current += half();
        track.scrollLeft = positionRef.current;
      } else {
        // keep in sync with manual scrolling
        positionRef.current = track.scrollLeft;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reverse]);

  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    pausedRef.current = false;
  };

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    const card = track?.querySelector('.carousel__item');
    if (!card) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    track.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: 'smooth' });
  };

  const loopItems = [...items, ...items];

  return (
    <div
      className="carousel__row"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
      onTouchStart={pause}
      onTouchEnd={() => setTimeout(resume, 2500)}
    >
      <button type="button" className="carousel__nav carousel__nav--prev" onClick={() => scrollByCard(-1)} aria-label={`Previous – ${label}`}>
        <ChevronLeft size={22} />
      </button>

      <ul className="carousel__track" ref={trackRef} aria-label={label}>
        {loopItems.map((service, index) => {
          const isClone = index >= items.length;
          return (
            <li key={`${service.id}-${index}`} className="carousel__item" aria-hidden={isClone || undefined}>
              <ServiceSlide service={service} tabIndex={isClone ? -1 : undefined} />
            </li>
          );
        })}
      </ul>

      <button type="button" className="carousel__nav carousel__nav--next" onClick={() => scrollByCard(1)} aria-label={`Next – ${label}`}>
        <ChevronRight size={22} />
      </button>
    </div>
  );
}

/**
 * Two-row services slider (rows move in opposite directions), 3 slides per frame on desktop.
 * The list is split in half: first half on row 1, second half on row 2.
 */
function ServiceCarousel({ services }) {
  const middle = Math.ceil(services.length / 2);
  const rows = [services.slice(0, middle), services.slice(middle)];

  return (
    <div className="carousel">
      <CarouselRow items={rows[0]} label="Services slider row 1" />
      <CarouselRow items={rows[1]} reverse label="Services slider row 2" />
    </div>
  );
}

export default ServiceCarousel;
