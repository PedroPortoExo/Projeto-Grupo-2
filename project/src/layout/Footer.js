import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import {  Facebook, Messenger, Twitter,Instagram, Linkedin, CopyRight } from '../components/Icons'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerContainer}>
                    <div className={styles.row}>
                    <div className={`${styles.column6} ${styles.marginBottom3} ${styles.columnMd2}`}>
                            <h5>Biblioteca Virtual</h5>
                            <ul className={styles.navUl}>
                            <li className={styles.navItem}><Link to="#" className={styles.footerItens}>Biblioteca Virtual</Link></li>
                            <li className={styles.navItem}><Link to="#" className={styles.footerItens}>Recursos</Link></li>
                            <li className={styles.navItem}><Link to="#" className={styles.footerItens}>Suporte ao Cliente</Link></li>
                            <li className={styles.navItem}><Link to="#" className={styles.footerItens}>FAQs</Link></li>
                            </ul>
                        </div>

                        <div className={`${styles.column6} ${styles.marginBottom3} ${styles.columnMd2}`}>
                            <h5>Quem Somos</h5>
                            <ul className={styles.navUl}>
                            <li className={styles.navItem}><Link to="#" className={styles.footerItens}>Sobre nós</Link></li>
                            <li className={styles.navItem}><Link to="#" className={styles.footerItens}>Editoras Parceiras</Link></li>
                            <li className={styles.navItem}><Link to="#" className={styles.footerItens}>Clientes</Link></li>
                            </ul>
                        </div>

                    </div>

                    <div className={styles.footerBottom}>
                    <p><CopyRight/> 024 Company, Inc. All rights reserved. &copy;</p>
                        <div className={styles['social-media']}>
                <ul>
                    <li>
                    <Link to="#"><Facebook/></Link>
                    </li>
                    <li>
                    <Link to="#"><Messenger /></Link>
                    </li>
                    <li>
                        <Link to="#"><Twitter /></Link>
                    </li>
                    <li>
                    <Link to="#"> <Instagram /></Link>
                    </li>
                    <li>
                    <Link to="#"><Linkedin /></Link>
                    </li>
                </ul>
                    </div>
                </div>
            </div>
            </div>
        </footer>
    );
}
