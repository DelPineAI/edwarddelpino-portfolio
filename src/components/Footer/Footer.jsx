import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import site from '../../data/site.json';

export const Footer = ({ variant = 'engineering' }) => {
  const data = site.footers[variant];

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.note}>{data.note}</span>

        {data.links && (
          <div className={styles.links}>
            {data.links.map((link) => (
              <a
                key={link.label}
                className={styles.link}
                href={link.href}
                {...(link.href.startsWith('http')
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        {data.back && (
          <Link className={styles.back} to={data.back.to}>
            {data.back.label}
          </Link>
        )}
      </div>
    </footer>
  );
};
