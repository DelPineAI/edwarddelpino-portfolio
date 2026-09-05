import { Parallax } from '../Parallax/Parallax';
import styles from './AmbientBackground.module.css';

/** Fixed drifting blur field behind every screen. Ported from the design root. */
export const AmbientBackground = () => (
  <div className={styles.field} aria-hidden="true">
    <Parallax rate={0.05} absolute className={styles.slotOne}>
      <div className={`${styles.blob} ${styles.blobOne}`} />
    </Parallax>
    <Parallax rate={0.11} absolute className={styles.slotTwo}>
      <div className={`${styles.blob} ${styles.blobTwo}`} />
    </Parallax>
    <Parallax rate={0.03} absolute className={styles.slotThree}>
      <div className={`${styles.blob} ${styles.blobThree}`} />
    </Parallax>
    <div className={styles.vignette} />
  </div>
);
