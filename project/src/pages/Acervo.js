import { useState, useEffect } from 'react';
import styles from './acervo.module.css'; // Importando o CSS Module

function Acervo() {
    const [livros, setLivros] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [autores, setAutores] = useState([]);
    const [filtroCategoria, setFiltroCategoria] = useState('');
    const [filtroAutor, setFiltroAutor] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then((response) => response.json())
            .then((data) => setLivros(data));
        
        fetch('http://localhost:5000/categories')
            .then((response) => response.json())
            .then((data) => setCategorias(data));

        fetch('http://localhost:5000/books')
            .then((response) => response.json())
            .then((data) => {
                const uniqueAuthors = [...new Set(data.map(book => book.author))];
                setAutores(uniqueAuthors);
            });
    }, []);

    return (
        <main className={styles.mainContent}>
            <section className={styles.section_filtro}>
                <nav className={styles.filtro}>
                    <div>
                        <input 
                            className={styles.form_input} 
                            placeholder="PESQUISE POR TÍTULO OU AUTOR..." 
                        />
                    </div>
                </nav>

                {/* Filtro de Categorias e Autores */}
                <nav className={styles.categorias}>
                    <div className="col">
                        <select 
                            className="form-select form-select-sm" 
                            onChange={(e) => setFiltroCategoria(e.target.value)}
                        >
                            <option value="">Selecione a categoria</option>
                            {categorias.map((categoria) => (
                                <option key={categoria.id} value={categoria.name}>
                                    {categoria.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="col">
                        <select 
                            className="form-select form-select-sm" 
                            onChange={(e) => setFiltroAutor(e.target.value)}
                        >
                            <option value="">Selecione o Autor</option>
                            {autores.map((autor, index) => (
                                <option key={index} value={autor}>{autor}</option>
                            ))}
                        </select>
                    </div>
                </nav>
            </section>

            <section className={styles.section_cards}>
                <div className={styles.cardContainer}>
                    {livros
                        .filter((livro) => 
                            (!filtroCategoria || livro.category === filtroCategoria) &&
                            (!filtroAutor || livro.author === filtroAutor)
                        )
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
                                    <button className={styles.customButton}>Alugar</button>
                                </div>
                            </a>
                        ))
                    }
                </div>
            </section>
        </main>
    );
}

export default Acervo;