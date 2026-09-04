import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Edward</h1>
        <p className={styles.description}>
          I build software end to end, from the database and infrastructure up
          to the interface, and I care as much about why something is being
          built as how. Right now that means healthcare tools, data pipelines,
          and the occasional circuit board.
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl('hero/edwardhero.png')}
        alt="Image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
