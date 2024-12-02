import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useGlobalStates } from '../Context/Context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const{theme, toggleTheme}= useGlobalStates()


  const { pathname } = useLocation();
  

  return (
    <nav className={styles.navBar}>
      <Link to={'/'} className={styles.links}><h2 className={styles.logo}>
        <span style={{ color: 'red' }}>D</span>H-Odonto
      </h2></Link>

      <div className={styles.containerBtnMenu}>
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <ul className={styles.containerItems}>
          <li>
            <Link
              to={'/home'}
              className={`${
                pathname === '/home'
              ? styles.activeLink: styles.links}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link to={'/contact'} className={`${pathname === '/contact' ? styles.activeLink : styles.links}`}>
              Contact
            </Link>
          </li>
          <li>
            <Link to={'/fav'}  className={`${pathname === '/fav' ? styles.activeLink : styles.links}`}>
              Favs
            </Link>
          </li>
        </ul>

        <div className={styles.containerIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
            style={{ color: 'white' }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
        </div>

        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button className={styles.btnTheme} onClick={toggleTheme}>
          {theme === 'dark' ? '🌞' : '🌜'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
