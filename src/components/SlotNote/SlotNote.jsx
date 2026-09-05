import styles from './SlotNote.module.css';

/**
 * An empty figure slot carried over from the design — artwork Edward has not
 * supplied yet. Renders the label and the brief so the space is reserved and
 * self-documenting rather than silently missing.
 */
export const SlotNote = ({ label, note, tall = false }) => (
  <div className={`${styles.slot} ${tall ? styles.tall : ''}`.trim()}>
    <div className={styles.inner}>
      {label && <div className={styles.label}>{label}</div>}
      {note && <div className={styles.note}>{note}</div>}
    </div>
  </div>
);
