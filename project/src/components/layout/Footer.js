import 'bootstrap/dist/css/bootstrap.min.css'; 
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className="py-5">
                    <div className="row">
                        <div className="col-6 col-md-2 mb-3">
                            <h5>Biblioteca Virtual</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#"  className={styles.footer}>Biblioteca Virtual</a></li>
                                <li className="nav-item mb-2"><a href="#"  className={styles.footer}>Recursos</a></li>
                                <li className="nav-item mb-2"><a href="#"  className={styles.footer}>Suporte ao Cliente</a></li>
                                <li className="nav-item mb-2"><a href="#"  className={styles.footer}>FAQs</a></li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5>Quem Somos</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#"  className={styles.footer}>Quem Somos</a></li>
                                <li className="nav-item mb-2"><a href="#"  className={styles.footer}>Editoras Parceiras</a></li>
                                <li className="nav-item mb-2"><a href="#"  className={styles.footer}>Clientes</a></li>
                            </ul>
                        </div>

                        <div className="col-md-5 offset-md-1 mb-3">
                            <form>
                                <h5>Subscribe to our newsletter</h5>
                                <p>Monthly digest of what's new and exciting from us.</p>
                                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                    <button className="btn btn-primary" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p>&copy; 2024 Company, Inc. All rights reserved.</p>
                        <ul className="list-unstyled d-flex">
                            <li className="ms-3">
                                <a className="link-body-emphasis" href="#">
                                    <img width="35" height="35" src="https://img.icons8.com/ios-filled/50/FFFFFF/facebook-new.png" alt="facebook-new" />
                                </a>
                            </li>
                            <li className="ms-3">
                                <a className="link-body-emphasis" href="#">
                                    <img width="35" height="35" src="https://img.icons8.com/ios-filled/50/FFFFFF/instagram-new--v1.png" alt="instagram-new--v1" />
                                </a>
                            </li>
                            <li className="ms-3">
                                <a className="link-body-emphasis" href="#">
                                    <img width="35" height="35" src="https://img.icons8.com/ios-filled/50/FFFFFF/twitterx--v2.png" alt="twitterx--v2" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
