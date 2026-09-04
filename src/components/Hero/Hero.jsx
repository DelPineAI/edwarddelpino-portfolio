import styles from './Hero.module.css';
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Edward</h1>
        <p className={styles.description}>
          I'm an aspiring software developer and data analyst driven by a deep
          curiosity, with a strong foundation in Python, SQL, data
          visualization, and full-stack web development.
        </p>
        <a href="mailto:contact@edwarddelpino.info" className={styles.contactBtn}>
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
