import { Reveal } from '../Reveal/Reveal';
import { SlotNote } from '../SlotNote/SlotNote';
import styles from './Fragment.module.css';

/*
 * Inline manuscript markup.
 *
 *   ~~text~~   struck out in the original
 *   **text**   the author's emphasis
 *   *text*     inserted above the line / via caret
 *   (n)        the author's confidence rating for the statement, 1-10
 *   [struck]   a scribble-out that could not be recovered
 *
 * The wrappers nest ("~~they are *all* what they are~~"), so this recurses
 * rather than running a single pass. Visible characters are never altered:
 * a rating still reads "(9)" on the page, it just carries a label.
 */
const WRAPPERS = [
  { open: '~~', re: /~~([\s\S]+?)~~/, tag: 'del', cls: 'struck' },
  { open: '**', re: /\*\*([\s\S]+?)\*\*/, tag: 'strong', cls: 'strong' },
  { open: '*', re: /\*([\s\S]+?)\*/, tag: 'span', cls: 'inserted' },
];
const ILLEGIBLE = /\[struck[^\]]*\]/;
const RATING = /\((\d{1,2})\)/;

export const renderInline = (text, key = 'i') => {
  if (typeof text !== 'string' || !text) return text;

  let best = null;
  WRAPPERS.forEach((rule, priority) => {
    const m = rule.re.exec(text);
    if (!m) return;
    if (!best || m.index < best.m.index || (m.index === best.m.index && priority < best.priority)) {
      best = { rule, m, priority, kind: 'wrap' };
    }
  });
  [[ILLEGIBLE, 'illegible'], [RATING, 'rating']].forEach(([re, kind]) => {
    const m = re.exec(text);
    if (!m) return;
    if (!best || m.index < best.m.index) best = { m, kind };
  });

  if (!best) return text;

  const { m, kind } = best;
  const before = text.slice(0, m.index);
  const after = text.slice(m.index + m[0].length);
  let node;

  if (kind === 'wrap') {
    const Tag = best.rule.tag;
    node = (
      <Tag key={`${key}-w`} className={styles[best.rule.cls]}>
        {renderInline(m[1], `${key}-w-in`)}
      </Tag>
    );
  } else if (kind === 'illegible') {
    node = <span key={`${key}-x`} className={styles.illegible}>{m[0]}</span>;
  } else {
    node = (
      <span
        key={`${key}-r`}
        className={styles.rating}
        title={`The author's confidence in this statement: ${m[1]} out of 10`}
        aria-label={`confidence ${m[1]} out of 10`}
      >
        {m[0]}
      </span>
    );
  }

  return (
    <>
      {before}
      {node}
      {renderInline(after, `${key}-a`)}
    </>
  );
};

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
        {data.title && <h2 className={styles.title}>{data.title}</h2>}
        {data.body.map((para, i) => (
          <p className={styles.para} key={para.slice(0, 40) + i}>
            {renderInline(para, `p${data.page}-${i}`)}
          </p>
        ))}
        {data.box && (
          <div className={styles.box}>
            {data.box.map((line, i) => (
              <p className={styles.boxLine} key={line.slice(0, 40) + i}>
                {renderInline(line, `p${data.page}-b${i}`)}
              </p>
            ))}
          </div>
        )}
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
          {data.figure.caption && (
            <div className={styles.figCaption}>
              <span className={styles.figTag}>{data.figure.tag}</span>
              <span className={styles.figText}>{data.figure.caption}</span>
            </div>
          )}
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
