import { useEffect, useRef } from 'react';

const reduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/** Wrapper marking the region a pointer must be inside for its TiltCards to react. */
export const TiltZone = ({ className = '', style, children }) => (
  <div data-tilt-zone="1" className={className} style={style}>
    {children}
  </div>
);

/** Port of the design's `data-tilt` / `data-tilt-base`. */
export const TiltCard = ({ base = [0, 0], className = '', style, children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced()) return undefined;
    const [baseY, baseX] = base;

    const onMove = (e) => {
      const zone = el.closest('[data-tilt-zone]') || el.parentElement;
      if (!zone) return;
      const r = zone.getBoundingClientRect();
      const inside =
        e.clientX > r.left && e.clientX < r.right &&
        e.clientY > r.top && e.clientY < r.bottom;
      const nx = inside ? (e.clientX - r.left) / r.width - 0.5 : 0;
      const ny = inside ? (e.clientY - r.top) / r.height - 0.5 : 0;
      const ry = baseY + nx * -9;
      const rx = baseX + ny * 7;
      el.style.transform =
        `perspective(1400px) rotateY(${ry.toFixed(2)}deg) rotateX(${rx.toFixed(2)}deg) translateZ(0)`;
    };

    el.style.transform =
      `perspective(1400px) rotateY(${baseY}deg) rotateX(${baseX}deg) translateZ(0)`;
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [base]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
};
