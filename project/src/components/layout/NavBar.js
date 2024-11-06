import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import logo from './assets/images/logo.svg'; 

function Navbar({ user, handleLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="Logo do Site" className={styles.logoImage} />
        </Link>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`${styles.navbarMenu} ${isMenuOpen ? styles.active : ''}`}>
        <li>
          <Link to="/" className={styles.navbarLink}>Início</Link>
        </li>
        <li>
          <Link to="/Home" className={styles.navbarLink}>Home</Link>
        </li>
        <li>
          <Link to="/Acervo" className={styles.navbarLink}>Acervo</Link>
        </li>
        <li>
          <Link to="/Sobre-nos" className={styles.navbarLink}>Sobre nós</Link>
        </li>
        {user ? (
          <>
            <li className={styles.navbarLink}>Olá, {user.name}</li>
            <li>
              <button onClick={handleLogout} className={styles.navbarLink}>Sair</button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/" className={styles.navbarLink}>Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;