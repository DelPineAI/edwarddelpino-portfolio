import { Link } from 'react-router-dom';
import { Reveal } from '../Reveal/Reveal';
import { TiltZone, TiltCard } from '../TiltCard/TiltCard';
import styles from './ArchiveGrid.module.css';

const num = (i) => String(i + 1).padStart(2, '0');

/**
 * One entry in the archive index.
 *
 * An entry with `href` routes; one without renders as a plain article. Both
 * get the same panel, the same type, and the same text strength — an entry
 * that is not yet transcribed is a state, not a disabled control, so nothing
 * here dims or greys it.
 */
const Entry = ({ entry, index }) => {
  const body = (
    <>
      <div className={styles.entryHead}>
        <span className={styles.num}>{num(index)}</span>
        <span className={styles.date}>{entry.dateRange}</span>
      </div>

      <h3 className={styles.title}>{entry.title}</h3>
      <p className={styles.excerpt}>{entry.excerpt}</p>

      {entry.annotation && (
        <div className={styles.annotation}>{entry.annotation}</div>
      )}

      <div className={styles.entryFoot}>
        <span className={`${styles.state} ${styles[entry.state]}`}>
          {entry.stateLabel}
        </span>
        {entry.href && <span className={styles.go} aria-hidden="true">→</span>}
      </div>
    </>
  );

  if (entry.href) {
    return (
      <Reveal as="div" index={index}>
        <Link className={`${styles.entry} ${styles.entryLink}`} to={entry.href}>
          {body}
        </Link>
      </Reveal>
    );
  }

  return (
    <Reveal as="article" index={index} className={styles.entry}>
      {body}
      {entry.link && (
        <a
          className={styles.secondary}
          href={entry.link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {entry.link.label}
        </a>
      )}
    </Reveal>
  );
};

/** The featured entry — the most substantial item in the collection, not a different kind of thing. */
const Featured = ({ entry, index }) => (
  <TiltZone className={styles.featuredZone}>
    <Reveal>
      <TiltCard base={[0, 0]} className={styles.featured}>
        <Link className={styles.featuredLink} to={entry.href}>
          {entry.greek && (
            <span className={styles.watermark} aria-hidden="true">{entry.greek}</span>
          )}

          <div className={styles.featuredBody}>
            <div className={styles.entryHead}>
              <span className={styles.num}>{num(index)}</span>
              <span className={styles.date}>{entry.dateRange}</span>
              <span className={styles.featuredFlag}>Featured</span>
            </div>

            <h3 className={styles.featuredTitle}>{entry.title}</h3>
            <p className={styles.featuredExcerpt}>{entry.excerpt}</p>

            <div className={styles.entryFoot}>
              <span className={`${styles.state} ${styles[entry.state]}`}>
                {entry.stateLabel}
              </span>
              <span className={styles.featuredGo}>Read the treatise →</span>
            </div>
          </div>
        </Link>
      </TiltCard>
    </Reveal>
  </TiltZone>
);

export const ArchiveGrid = ({ data }) => {
  const featured = data.entries.filter((e) => e.featured);
  const rest = data.entries.filter((e) => !e.featured);

  return (
    <section className={styles.section} id="archive">
      <div className={styles.inner}>
        {featured.map((entry) => (
          <Featured key={entry.slug} entry={entry} index={data.entries.indexOf(entry)} />
        ))}

        <div className={styles.grid}>
          {rest.map((entry) => (
            <Entry
              key={entry.slug}
              entry={entry}
              index={data.entries.indexOf(entry)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
