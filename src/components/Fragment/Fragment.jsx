import { Reveal } from '../Reveal/Reveal';
import { SlotNote } from '../SlotNote/SlotNote';
import styles from './Fragment.module.css';

/** A gap in the surviving set — pages that did not survive. */
export const FragmentGap = ({ label, note }) => (
  <Reveal className={styles.gap}>
    <span className={styles.gapLabel}>{label}</span>
    <span className={styles.gapNote}>{note}</span>
  </Reveal>
);

/** One transcribed page of the treatise. */
export const Fragment = ({ data }) => (
  <article className={styles.fragment} id={`p${data.page}`}>
    <Reveal className={styles.marker}>P. {data.page}</Reveal>

    <div className={styles.body}>
      <Reveal className={styles.prose}>
        {data.kicker && <div className={styles.kicker}>{data.kicker}</div>}
        <h2 className={styles.title}>{data.title}</h2>
        {data.body.map((para) => (
          <p className={styles.para} key={para.slice(0, 40)}>{para}</p>
        ))}
        {data.inlineQuote && (
          <p className={styles.inlineQuote}>&ldquo;{data.inlineQuote}&rdquo;</p>
        )}
      </Reveal>

      {data.pullQuote && (
        <Reveal className={styles.pullQuote}>
          <p className={styles.pullQuoteText}>
            &ldquo;{data.pullQuote.quote}&rdquo;
          </p>
          <p className={styles.pullQuoteCaption}>{data.pullQuote.caption}</p>
        </Reveal>
      )}

      {data.figure && (
        <Reveal className={styles.figure}>
          <SlotNote
            label={data.figure.label}
            note={data.figure.note}
            tall={data.figure.label.includes('primary')}
          />
          <div className={styles.figCaption}>
            <span className={styles.figTag}>{data.figure.tag}</span>
            <span className={styles.figText}>{data.figure.caption}</span>
          </div>
        </Reveal>
      )}
    </div>
  </article>
);

/** The tail block: pages that survive but are not yet transcribed. */
export const FragmentAwaiting = ({ data }) => (
  <Reveal className={styles.awaiting} id={data.anchor}>
    <div className={styles.awaitingHead}>
      <span className={styles.gapLabel}>{data.label}</span>
      <span className={styles.awaitingState}>{data.state}</span>
    </div>
    <p className={styles.awaitingBody}>{data.body}</p>
  </Reveal>
);
