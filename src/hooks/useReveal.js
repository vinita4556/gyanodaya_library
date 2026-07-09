import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to the returned ref and toggles
 * the `is-visible` class once the element enters the viewport.
 * Pairs with the .reveal / .reveal-zoom utility classes in index.css.
 */
export default function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options]);

  return ref;
}
