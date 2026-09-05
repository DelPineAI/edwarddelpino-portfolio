import { Reveal } from '../Reveal/Reveal';
import { getImageUrl } from '../../utils';
import styles from './Epigraph.module.css';

export const Epigraph = ({ data }) => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <Reveal className={styles.quoteBlock}>
        <div className={styles.eyebrow}>{data.eyebrow}</div>
        <blockquote className={styles.quote}>&ldquo;{data.quote}&rdquo;</blockquote>
        <div className={styles.attribution}>{data.attribution}</div>
      </Reveal>

      <div className={styles.aside}>
        <Reveal as="figure" className={styles.portrait}>
          <img
            className={styles.portraitImage}
            src={getImageUrl(data.portrait.imageSrc)}
            alt={data.portrait.alt}
          />
          <figcaption className={styles.portraitCaption}>
            {data.portrait.caption}
          </figcaption>
        </Reveal>

        <Reveal index={1} className={styles.note}>
          <div className={styles.noteSource}>{data.note.source}</div>
          <p className={styles.noteBody}>{data.note.body}</p>
        </Reveal>
      </div>
    </div>
  </section>
);
