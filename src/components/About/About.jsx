import styles from './About.module.css';
import { getImageUrl } from '../../utils';

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl('hero/aboutme.png')}
          alt="Me soldering hardware components"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/serverIcon.png')} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Analyst</h3>
              <p>
                I'm an aspiring data analyst with experience in analyzing
                complex datasets and creating insightful visualizations.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/cursorIcon.png')} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Developer</h3>
              <p>
                I have experience building responsive and optimized websites, as
                well as developing efficient back-end systems and APIs to ensure
                fast and reliable performance.
              </p>
            </div>
          </li>
          <li className={`${styles.aboutItem} ${styles.aboutItemTextBrain}`}>
            <img src={getImageUrl('about/brainIcon.png')} alt="Brain icon" />
            <div className={styles.aboutItemTextBrain}>
              <h3>Curiosity-Driven Problem Solver</h3>
              <p>
                My obsession for metaphysical thought and the nature of our
                reality fuels my critical thinking, empowering me to analyze
                complex challenges, craft innovative solutions, and lay new
                foundations for transformative ideas.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
