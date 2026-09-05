import { Reveal } from '../Reveal/Reveal';
import styles from './Dimensions.module.css';

export const Dimensions = ({ items }) => (
  <section className={styles.section}>
    <div className={styles.inner}>
      {items.map((item, i) => (
        <Reveal key={item.label} index={i} className={styles.item}>
          <div className={styles.label}>{item.label}</div>
          <p className={styles.body}>{item.body}</p>
        </Reveal>
      ))}
    </div>
  </section>
);
