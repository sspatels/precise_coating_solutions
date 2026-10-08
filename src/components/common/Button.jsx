import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Button.css';

/**
 * Reusable button. Renders a router <Link> when `to` is given,
 * an <a> when `href` is given, otherwise a <button>.
 *
 * @param {'primary'|'outline'|'dark'|'white'} variant
 * @param {'md'|'lg'} size
 */
function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  withArrow = true,
  className = '',
  ...rest
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();
  const content = (
    <>
      <span>{children}</span>
      {withArrow && <ArrowRight className="btn__arrow" size={18} aria-hidden="true" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}

export default Button;
