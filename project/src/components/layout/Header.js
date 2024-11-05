import 'bootstrap/dist/css/bootstrap.min.css'; // Importação do Bootstrap primeiro
import styles from './Header.module.css'
import logo from './assets/images/logo.svg'; // Caminho relativo ao componente

function Header(){
    return(
        <>
            <header className={styles.header}>
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-decoration-none">
                            <img width="130" height="130" src={logo} alt="Biblioteca Virtual" className={styles.navImg}/>
                        </a>

                        <ul className={`${styles.nav} nav col-12 col-lg-auto me-lg-auto mb-2 mb-md-0`}>
                            <li><a href="#" className={styles.navLink}>Home</a></li>
                            <li><a href="#" className={styles.navLink}>Acervo</a></li>
                            <li><a href="#" className={styles.navLink}>Quem Somos</a></li>
                        </ul>

                        <div className="text-end d-flex">
                            <span className={styles.span}><a href="#" className={styles.navLink}>Login</a></span>
                            <span><a href="#" className={styles.navLink}>Sair</a></span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header