import { useEffect, useRef } from 'react';
import styles from './ScrollProgress.module.css';

/** Port of the design's `data-progress` bar. */
export const ScrollProgress = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    let raf = null;
    const apply = () => {
      raf = null;
      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - window.innerHeight);
      const pct = Math.min(1, (window.scrollY || 0) / max) * 100;
      el.style.width = `${pct.toFixed(2)}%`;
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
  }, []);

  return (
    <div className={styles.track}>
      <div ref={ref} className={styles.bar} />
    </div>
  );
};
