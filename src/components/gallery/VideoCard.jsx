import { useRef, useState } from 'react';
import { Clock, Play } from 'lucide-react';
import Watermark from './Watermark';
import './VideoCard.css';

const formatTime = (seconds) => {
  if (!Number.isFinite(seconds)) return '';
  const s = Math.round(seconds);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
};

/**
 * Video tile: shows the first frame, plays a muted preview on hover,
 * and opens the full video in the viewer on click.
 */
function VideoCard({ item, categoryLabel, onOpen }) {
  const videoRef = useRef(null);
  const [duration, setDuration] = useState(null);
  const [isPreviewing, setIsPreviewing] = useState(false);

  const startPreview = () => {
    const video = videoRef.current;
    if (!video) return;
    video.play().then(() => setIsPreviewing(true)).catch(() => {});
  };

  const stopPreview = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0.5;
    setIsPreviewing(false);
  };

  return (
    <button
      type="button"
      className={`video-card ${isPreviewing ? 'is-previewing' : ''}`}
      onClick={onOpen}
      onMouseEnter={startPreview}
      onMouseLeave={stopPreview}
      onFocus={startPreview}
      onBlur={stopPreview}
      aria-label={`Play video: ${item.title}`}
    >
      <video
        ref={videoRef}
        className="video-card__video"
        src={`${item.src}#t=0.5`}
        muted
        loop
        playsInline
        preload="metadata"
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
      />
      <Watermark />

      <span className="video-card__play" aria-hidden="true">
        <Play size={26} fill="currentColor" />
      </span>

      {duration && (
        <span className="video-card__duration">
          <Clock size={13} aria-hidden="true" /> {formatTime(duration)}
        </span>
      )}

      <span className="video-card__info">
        <span className="video-card__category">{categoryLabel}</span>
        <span className="video-card__title">{item.title}</span>
      </span>
    </button>
  );
}

export default VideoCard;
