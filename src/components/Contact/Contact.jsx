import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Let's get deep ~</p>
      </div>
      <ul className={styles.links}>
        <li className={`${styles.link} ${styles.linkemail}`}>
          <a href="mailto:contact@edwarddelpino.info">
            <img src={getImageUrl('contact/emailIcon.png')} alt="Email icon" />
          </a>
          <a id="email" href="mailto:contact@edwarddelpino.info">
            contact@edwarddelpino.info
          </a>
        </li>
        <li className={`${styles.link} ${styles.linklinkedin}`}>
          <a
            href="https://www.linkedin.com/in/edward-del-pino"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={getImageUrl('contact/linkedinIcon.png')} alt="LinkedIn icon" />
          </a>
          <a
            id="linkedin"
            href="https://www.linkedin.com/in/edward-del-pino"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/edward-del-pino
          </a>
        </li>
        <li className={`${styles.link} ${styles.linkgithub}`}>
          <a
            href="https://github.com/DelPineAI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={getImageUrl('contact/githubIcon.png')} alt="Github icon" />
          </a>
          <a
            id="github"
            href="https://github.com/DelPineAI"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/DelPineAI
          </a>
        </li>
      </ul>
    </footer>
  );
};
