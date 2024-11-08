import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import styles from "./NavBar.module.css";
import logo from "../assets/images/logo.svg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const Menu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const sair = () => {
    logout();
    navigate("/");
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="Logo do Site" className={styles.logoImage} />
        </Link>
      </div>
      <div className={styles.hamburger} onClick={Menu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`${styles.navbarMenu} ${isMenuOpen ? styles.active : ""}`}>
        <li className={styles.navbarLink}>
          <span className={styles.navbarTitle}>BookVirtua</span>
        </li>
        <li>
          <Link to="/Sobre-nos" className={styles.navbarLink}>
            Sobre nós
          </Link>
        </li>
        {user ? (
          <>
            <li>
              <Link to="/Home" className={styles.navbarLink}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/Acervo" className={styles.navbarLink}>
                Acervo
              </Link>
            </li>
            <li>
              <Link to="/ListLivros" className={styles.navbarLink}>
                Seus Livros
              </Link>
            </li>
            <li className={styles.navbarLink}>Olá, {user.name}</li>
            <li>
              <button onClick={sair} className={styles.navbarLinkB}>
                Sair
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/" className={styles.navbarLink}>
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
