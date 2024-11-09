import { useState, useEffect } from 'react';
import styles from './listLivros.module.css';

function ListLivros() {
    const [livros, setLivros] = useState([]);
    const [user, setUser] = useState(); // Estado para o usuário logado

    useEffect(() => {
        // Carregar livros
        fetch('http://localhost:5000/books')
            .then(response => response.json())
            .then(data => setLivros(data));

        // Carregar usuário logado (simulando um usuário logado fixo para este exemplo)
        fetch('http://localhost:5000/users/1')  // URL de exemplo para obter o usuário com id 1, (PEDRO AJUDA AQUI, MANO <-----------------------------------)
            .then(response => response.json())
            .then(data => setUser(data));
    }, []);

    // Filtrar os livros com base nos 'borrowedBooks' do usuário logado
    const livrosEmprestados = livros.filter(livro =>
        user?.borrowedBooks.some(borrowed => borrowed.bookId === livro.id)
    );

    return (
        <main className={styles.mainContent}>
           <p className={styles.userWelcome}>
        {user ? `Bem-vindo(a), ${user.name}. Você tem ${livrosEmprestados.length} livro${livrosEmprestados.length !== 1 ? 's' : ''} emprestado${livrosEmprestados.length !== 1 ? 's' : ''}.` : 'Carregando...'}
    </p>

    <section className={styles.section_cards}>
                <div className={styles.cardContainer}>
                    {livrosEmprestados.map(livro => (
                        <a href={""} key={livro.id} className={styles.cardLink}>
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
                                <button className={styles.customButton}>Ler</button>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default ListLivros;
