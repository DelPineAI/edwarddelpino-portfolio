import { Link, useParams, Navigate } from 'react-router-dom';
import { Reveal } from '../components/Reveal/Reveal';
import { Parallax } from '../components/Parallax/Parallax';
import { VideoEmbed } from '../components/VideoEmbed/VideoEmbed';
import { Footer } from '../components/Footer/Footer';
import { renderInline } from '../components/Fragment/Fragment';
import styles from './Piece.module.css';

// One module per work, so adding a transcription never touches this file.
const modules = import.meta.glob('../data/pieces/*.json', { eager: true });
const PIECES = Object.fromEntries(
  Object.values(modules).map((m) => {
    const d = m.default ?? m;
    return [d.slug, d];
  })
);

const Section = ({ section, index, single }) => (
  <section className={styles.section}>
    {section.title && !single && (
      <Reveal className={styles.sectionHead}>
        <h2 className={styles.sectionTitle}>{section.title}</h2>
        {section.meta && <span className={styles.sectionMeta}>{section.meta}</span>}
      </Reveal>
    )}

    {section.state === 'missing' ? (
      <Reveal className={styles.pending}>
        <span className={styles.pendingLabel}>Not yet transcribed</span>
        <span className={styles.pendingNote}>{section.note}</span>
      </Reveal>
    ) : (
      <>
        {section.kicker && (
          <Reveal as="p" className={styles.kicker}>
            {renderInline(section.kicker, `k${index}`, 'prose')}
          </Reveal>
        )}

        {section.video && (
          <Reveal className={styles.video}>
            <VideoEmbed id={section.video} title={section.title} />
          </Reveal>
        )}

        {(section.body || []).map((para, i) => (
          <Reveal as="p" key={para.slice(0, 40) + i} className={styles.para}>
            {renderInline(para, `s${index}-${i}`, 'prose')}
          </Reveal>
        ))}

        {section.quote && (
          <Reveal className={styles.quote}>
            {section.quote.map((line, i) => (
              <p className={styles.quoteLine} key={line.slice(0, 30) + i}>
                {renderInline(line, `q${index}-${i}`, 'prose')}
              </p>
            ))}
          </Reveal>
        )}
      </>
    )}
  </section>
);

export const Piece = () => {
  const { slug } = useParams();
  const piece = PIECES[slug];
  if (!piece) return <Navigate to="/philosophy" replace />;

  const single = piece.sections.length === 1;

  return (
    <>
      <header className={styles.hero}>
        <Parallax rate={0.08} className={styles.wash}>
          <div className={styles.washInner} />
        </Parallax>

        <div className={styles.heroInner}>
          <Link className={styles.back} to="/philosophy">
            ← The archive
          </Link>

          <div className={styles.meta}>
            <span className={styles.date}>{piece.date}</span>
            <span className={styles.dot} aria-hidden="true" />
            <span className={styles.readTime}>{piece.readTime}</span>
            <span className={styles.dot} aria-hidden="true" />
            <span className={styles.mood}>{piece.mood}</span>
          </div>

          <h1 className={styles.title}>{piece.title}</h1>
          <p className={styles.excerpt}>{piece.excerpt}</p>

          <ul className={styles.tags}>
            {piece.tags.map((tag) => (
              <li className={styles.tag} key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </header>

      <div className={styles.body}>
        <div className={styles.inner}>
          {piece.sections.map((section, i) => (
            <Section key={section.title || i} section={section} index={i} single={single} />
          ))}
        </div>
      </div>

      <Footer variant="treatise" />
    </>
  );
};
