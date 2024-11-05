import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import logo from './assets/images/logo.svg';

export default function Navbar() {
  const [user, setUser] = useState(null);

  // Simulação de login ao carregar a Navbar
  useEffect(() => {
    const login = async () => {
      try {
        const response = await fetch("http://localhost:5000/users/1");
        const data = await response.json();
        setUser(data); // Define o usuário logado com o dado da API
      } catch (error) {
        console.error("Erro ao buscar usuário:", error);
      }
    };

    login();
  }, []);

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="Logo do Site" className={styles.logoImage} />
        </Link>
      </div>
      <ul className={styles.navbarMenu}>
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