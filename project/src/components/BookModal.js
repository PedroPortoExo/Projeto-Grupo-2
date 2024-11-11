import React, { useState } from 'react';
import styles from './BookModal.module.css';

function BookModal({ book, closeModal }) {
    const [currentPage, setCurrentPage] = useState(0);

    // Conteúdo fictício de páginas para simulação
    const pages = [
        `${book.title} - Página 1: Introdução`,
        `${book.title} - Página 2: Capítulo 1`,
        `${book.title} - Página 3: Capítulo 2`,
        `${book.title} - Página 4: Capítulo 3`,
        `${book.title} - Conclusão`
    ];

    const nextPage = () => {
        if (currentPage < pages.length - 1) setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 0) setCurrentPage(currentPage - 1);
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={closeModal}>Fechar</button>
                <div className={styles.pageContent}>
                    <h2>{book.title}</h2>
                    <p>{pages[currentPage]} 
                    </p>
                </div>
                <div className={styles.navigation}>
                    <button onClick={prevPage} disabled={currentPage === 0}>Página Anterior</button>
                    <button onClick={nextPage} disabled={currentPage === pages.length - 1}>Próxima Página</button>
                </div>
            </div>
        </div>
    );
}

export default BookModal;
