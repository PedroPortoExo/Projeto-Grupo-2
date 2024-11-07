import styles from './aluguel.module.css';

export default function Aluguel() {
    return (
        <div className={styles.container}>
            <div className={styles['book-cover']}>
                <img src="brief-history-of-time.jpg" alt="Capa do livro 'A Brief History of Time'" />
            </div>
            <div className={styles['book-info']}>
                <h1>A Brief History of Time</h1>
                <p>Autor: Stephen Hawking</p>
                <p>Editora: Bantam Dell Publishing Group</p>
                <p>Edição: 1988</p>
                <p>Gênero: Cosmologia, Ciência Popular</p>
                <p>Livros disponíveis: 4</p>
                <p>Status: <span style={{ color: '#63cc63', fontWeight: 'bolder' }}>Disponível</span></p>
                <button className={styles['rent-button']}>Alugar</button>
                <div className={styles.description}>
                    <p>Descrição:</p>
                    <p>O livro aborda conceitos fundamentais sobre a estrutura, origem, desenvolvimento e destino do Universo. Hawking explica temas complexos como o Big Bang, buracos negros, relatividade geral e mecânica quântica de uma forma acessível para leitores sem conhecimento prévio em física.</p>
                </div>
            </div>
        </div>
    );
}
