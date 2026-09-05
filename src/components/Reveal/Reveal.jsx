import { useEffect, useRef, useState } from 'react';
import styles from './Reveal.module.css';

const reduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/**
 * Scroll-reveal with stagger. Port of the design's `data-rev` behavior:
 * anything already above 94% of the viewport on mount is shown immediately,
 * everything else fades and rises as it intersects.
 */
export const Reveal = ({ as: Tag = 'div', index = 0, className = '', children, ...rest }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (typeof IntersectionObserver === 'undefined' || reduced()) {
      setShown(true);
      return undefined;
    }
    if (el.getBoundingClientRect().top < window.innerHeight * 0.94) {
      setShown(true);
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          setShown(true);
          io.unobserve(e.target);
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.04 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const delay = index > 0 ? `${Math.min(index, 5) * 75}ms` : undefined;

  return (
    <Tag
      ref={ref}
      className={`${styles.reveal} ${shown ? styles.shown : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: delay } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
};
