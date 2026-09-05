import { useEffect, useRef } from 'react';

const reduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/**
 * Port of the design's `data-par` / `data-par-abs`.
 *   absolute: offset from raw scrollTop (fixed backdrops)
 *   relative: offset from the parent's distance to viewport centre (in-flow art)
 */
export const Parallax = ({ rate = 0.1, absolute = false, className = '', style, children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced()) return undefined;

    let raf = null;
    const apply = () => {
      raf = null;
      const y = window.scrollY || 0;
      let offset;
      if (absolute) {
        offset = -y * rate;
      } else {
        const parent = el.parentElement;
        if (!parent) return;
        const r = parent.getBoundingClientRect();
        const centre = r.top + r.height / 2 - window.innerHeight / 2;
        offset = -centre * rate;
      }
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [rate, absolute]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
};
