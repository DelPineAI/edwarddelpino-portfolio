import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const onHome = pathname === '/';

  return (
    <nav className={styles.navbar}>
      <Link className={styles.title} to="/">
        Edward Del Pino
      </Link>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={getImageUrl(menuOpen ? 'nav/closeIcon.png' : 'nav/menuIcon.png')}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`}
          onClick={() => setMenuOpen(false)}
        >
          {onHome && (
            <>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
            </>
          )}
          <li>
            <NavLink
              to="/philosophy"
              className={({ isActive }) => (isActive ? styles.active : undefined)}
            >
              Philosophy
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/more"
              className={({ isActive }) => (isActive ? styles.active : undefined)}
            >
              More
            </NavLink>
          </li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};
