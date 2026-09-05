import { Reveal } from '../Reveal/Reveal';
import styles from './ShorterAnswers.module.css';

export const ShorterAnswers = ({ data }) => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <Reveal className={styles.head}>
        <span className={styles.eyebrow}>{data.eyebrow}</span>
        <h2 className={styles.title}>{data.title}</h2>
      </Reveal>

      <div className={styles.list}>
        {data.items.map((item, i) => (
          <Reveal
            key={item.title}
            as="a"
            index={i}
            className={styles.item}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.n}>{item.n}</span>
            <span className={styles.itemTitle}>{item.title}</span>
            <span className={styles.itemBody}>{item.body}</span>
            <span className={styles.action}>{item.action}</span>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
