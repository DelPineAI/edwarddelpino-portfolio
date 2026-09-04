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
            <img src={getImageUrl('about/cursorIcon.png')} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Engineer</h3>
              <p>
                I have shipped a multi-tenant SaaS product solo, from the React
                interface through Node APIs, a Postgres database with row-level
                security, and containerized deployment.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('about/serverIcon.png')} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Data &amp; Analytics</h3>
              <p>
                I work in SQL, Python, and Tableau to turn raw records into
                something a decision actually rests on, whether that is ranking
                power-plant sites or scoring model confidence.
              </p>
            </div>
          </li>
          <li className={`${styles.aboutItem} ${styles.aboutItemTextBrain}`}>
            <img src={getImageUrl('about/brainIcon.png')} alt="Brain icon" />
            <div className={styles.aboutItemTextBrain}>
              <h3>Curiosity-Driven Problem Solver</h3>
              <p>
                I want to understand why something works before I trust it. That
                instinct sent me from Boolean algebra and breadboards to
                production software, and it is why I start every project by
                talking to the people who will use it.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
