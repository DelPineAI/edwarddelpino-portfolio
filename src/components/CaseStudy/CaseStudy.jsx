import { Reveal } from '../Reveal/Reveal';
import { TiltZone, TiltCard } from '../TiltCard/TiltCard';
import { SlotNote } from '../SlotNote/SlotNote';
import { getImageUrl } from '../../utils';
import styles from './CaseStudy.module.css';

export const CaseStudy = ({ data }) => (
  <section className={styles.section} id={data.id}>
    <div className={styles.inner}>
      <Reveal className={styles.head}>
        <span className={styles.eyebrow}>{data.eyebrow}</span>
        <h2 className={styles.title}>{data.title}</h2>
        <a
          className={styles.link}
          href={data.link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.link.label}
        </a>
      </Reveal>

      <TiltZone className={styles.body}>
        <Reveal className={styles.prose}>
          <p className={styles.lead}>{data.body}</p>

          <div className={styles.callout}>
            <div className={styles.calloutLabel}>{data.callout.label}</div>
            <p className={styles.calloutBody}>{data.callout.body}</p>
          </div>

          <dl className={styles.stack}>
            {data.stack.map((row) => (
              <div className={styles.stackRow} key={row.term}>
                <dt className={styles.stackTerm}>{row.term}</dt>
                <dd className={styles.stackValue}>{row.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal className={styles.figureCol}>
          <TiltCard base={[6, -2]} className={styles.shot}>
            <img
              className={styles.shotImage}
              src={getImageUrl(data.image.imageSrc)}
              alt={data.image.alt}
            />
            <div className={styles.shotCaption}>{data.image.caption}</div>
          </TiltCard>
        </Reveal>
      </TiltZone>

      <Reveal className={styles.diagram}>
        <SlotNote label={data.figure.label} note={data.figure.note} />
        <div className={styles.figCaption}>
          <span className={styles.figTag}>{data.figure.tag}</span>
          <span className={styles.figText}>{data.figure.caption}</span>
        </div>
      </Reveal>
    </div>
  </section>
);
