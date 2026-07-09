import useReveal from '../hooks/useReveal.js';

/**
 * Wraps children in a div that fades/slides (or zooms) into view on scroll.
 * Usage: <Reveal className="delay-2"><Card /></Reveal>
 */
export default function Reveal({ children, as: Tag = 'div', className = '', zoom = false, ...rest }) {
  const ref = useReveal();
  const base = zoom ? 'reveal-zoom' : 'reveal';
  return (
    <Tag ref={ref} className={`${base} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
