import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import site from '../../data/site.json';

export const Navbar = () => (
  <nav className={styles.navbar}>
    <Link className={styles.brand} to="/">
      <span className={styles.brandName}>{site.brand.name}</span>
      <span className={styles.brandLocation}>{site.brand.location}</span>
    </Link>

    <div className={styles.actions}>
      {site.nav.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === '/'}
          className={({ isActive }) =>
            `${styles.tab} ${isActive ? styles.tabActive : ''}`.trim()
          }
        >
          {item.label}
        </NavLink>
      ))}
      {site.resume && (
        <a className={styles.resume} href={site.resume.href}>
          {site.resume.label}
        </a>
      )}
    </div>
  </nav>
);
