import { Reveal } from '../Reveal/Reveal';
import styles from './StatBand.module.css';

export const StatBand = ({ stats }) => (
  <section className={styles.section}>
    <div className={styles.inner}>
      {stats.map((stat, i) => (
        <Reveal key={stat.body} index={i} className={styles.item}>
          <div className={styles.value}>
            {stat.value}
            {stat.suffix && <span className={styles.suffix}>{stat.suffix}</span>}
          </div>
          <p className={styles.body}>{stat.body}</p>
        </Reveal>
      ))}
    </div>
  </section>
);
