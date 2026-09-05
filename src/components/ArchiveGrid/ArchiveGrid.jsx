import { Reveal } from '../Reveal/Reveal';
import styles from './ArchiveGrid.module.css';

export const ArchiveGrid = ({ data }) => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <Reveal className={styles.head}>
        <span className={styles.eyebrow}>{data.eyebrow}</span>
      </Reveal>

      <div className={styles.grid}>
        {data.items.map((item, i) => (
          <Reveal key={item.title} index={i} className={styles.item}>
            <span className={styles.tag}>{item.tag}</span>
            <div className={styles.itemBody}>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemText}>{item.body}</p>
              {item.annotation && (
                <div className={styles.annotation}>{item.annotation}</div>
              )}
              {item.link && (
                <a
                  className={styles.link}
                  href={item.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.link.label}
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
