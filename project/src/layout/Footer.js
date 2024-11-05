import {  Facebook, Messenger, Twitter,Instagram, Linkedin, Github, CopyRight } from './Icons'
import styles from './Footer.module.css';
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles['social-media']}>
                <ul>
                    <li>
                        <Facebook/>
                    </li>
                    <li>
                        <Messenger />
                    </li>
                    <li>
                        <Twitter />
                    </li>
                    <li>
                        <Instagram />
                    </li>
                    <li>
                        <Linkedin />
                    </li>
                    <li>
                        <Github />
                    </li>
                </ul>
                <span>Projetos &copy; 2024</span>
            </div>
            <p><CopyRight/> Todos os direitos reservados - 2024 &copy;</p>
        </footer>
    )
}