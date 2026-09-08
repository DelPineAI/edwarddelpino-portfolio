import { Parallax } from '../Parallax/Parallax';
import styles from './TreatiseHero.module.css';

export const TreatiseHero = ({ data, compact = false }) => (
  <section className={`${styles.section} ${compact ? styles.compact : ''}`.trim()}>
    <Parallax rate={0.1} className={styles.wash}>
      <div className={styles.washInner} />
    </Parallax>

    <div className={styles.inner}>
      <div className={styles.eyebrow}>{data.eyebrow}</div>
      <h1 className={styles.title}>{data.title}</h1>
      {data.author && <p className={styles.author}>{data.author}</p>}
      {data.intro && <p className={styles.intro}>{data.intro}</p>}

      {data.chips && (
      <div className={styles.chips}>
        {data.chips.map((chip, i) => (
          <span key={chip} className={styles.chipWrap}>
            {i > 0 && <span className={styles.sep} aria-hidden="true" />}
            <span className={styles.chip}>{chip}</span>
          </span>
        ))}
      </div>
      )}
    </div>
  </section>
);
