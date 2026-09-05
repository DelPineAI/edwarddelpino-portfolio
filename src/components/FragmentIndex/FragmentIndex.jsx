import { Reveal } from '../Reveal/Reveal';
import styles from './FragmentIndex.module.css';

export const FragmentIndex = ({ data }) => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <Reveal className={styles.head}>
        <span className={styles.eyebrow}>{data.eyebrow}</span>
        <span className={styles.summary}>{data.summary}</span>
      </Reveal>

      <Reveal className={styles.grid}>
        {data.pages.map((page) => {
          const cls = `${styles.page} ${styles[page.state]}`;
          return page.state === 'missing' ? (
            <span key={page.n} className={cls} aria-disabled="true">{page.n}</span>
          ) : (
            <a key={page.n} className={cls} href={`#${page.anchor || `p${page.n}`}`}>
              {page.n}
            </a>
          );
        })}
      </Reveal>

      <Reveal className={styles.legend}>
        {data.legend.map((item) => (
          <span key={item.state} className={styles.legendItem}>
            <span className={`${styles.swatch} ${styles[item.state]}`} />
            {item.label}
          </span>
        ))}
      </Reveal>
    </div>
  </section>
);
