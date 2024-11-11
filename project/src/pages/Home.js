import { useState, useEffect } from 'react';
import styles from './home.module.css';  
import Carrossel from '../components/Carrossel';


function Home() {
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then((response) => response.json())
            .then((data) => setLivros(data));
        
    }, []);


    return (
        <main className={styles.main_content}>

            <section className={styles.section_titulo}>
                <Carrossel/>
            </section>

            <section className={styles.section_cards}>
                <div className={styles.card_container}>
                    {livros
                       
                        .map((livro) => (
                            <a href={`/Aluguel/${livro.id}`} key={livro.id} className={styles.cardLink}>
                                <div className={styles.cardCustom}>
                                    <img 
                                        src={`${process.env.PUBLIC_URL}/images/${livro.coverImage}`} 
                                        alt={livro.title} 
                                        className={styles.cardImage} 
                                    />
                                    <div className="card-body">
                                        <div className={styles.tituloLivro}>
                                            <h3>{livro.title}</h3>
                                        </div>
                                        <div className={styles.autor}>
                                            <h4>{livro.author}</h4>
                                        </div>
                                    </div>
                                    <button className={styles.buttonCont}>Alugar</button>
                                </div>
                            </a>
                        ))
                    }
                </div>
            </section>     
        </main>
    );
}

export default Home;