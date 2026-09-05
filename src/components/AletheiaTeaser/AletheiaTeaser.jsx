import { Link } from 'react-router-dom';
import { Reveal } from '../Reveal/Reveal';
import { Parallax } from '../Parallax/Parallax';
import styles from './AletheiaTeaser.module.css';

export const AletheiaTeaser = ({ data }) => (
  <section className={styles.section}>
    <Parallax rate={0.05} className={styles.wash}>
      <div className={styles.washInner} />
    </Parallax>

    <div className={styles.inner}>
      <div className={styles.watermark} aria-hidden="true">{data.watermark}</div>

      <Reveal className={styles.copy}>
        <div className={styles.eyebrow}>{data.eyebrow}</div>
        <h2 className={styles.title}>{data.title}</h2>
        <p className={styles.body}>{data.body}</p>
        <Link className={styles.action} to={data.action.to}>
          {data.action.label}
        </Link>
      </Reveal>
    </div>
  </section>
);
