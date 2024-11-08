import styles from './acervo.module.css'; // Importando o CSS Module
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';
import img5 from '../assets/images/img5.jpg';
import img6 from '../assets/images/img6.jpg';
import img7 from '../assets/images/img7.jpg';
import img8 from '../assets/images/img8.jpg';


function Acervo() {

    const livros = [
        {
            imagem: img1,
            titulo: 'FUNDAMENTOS DA NEUROPSCOL....',
            autor: 'Raphael Moroz Teixeira'
        },
        {
            imagem: img2,
            titulo: 'ME CHAMO MILAGRE',
            autor: ' Augusto Cury'
        },
        {
            imagem: img3,
            titulo: 'Uma história concisa do Oriente Médio',
            autor: 'Artur G. Jr'
        },
        {
            imagem: img4,
            titulo: 'ANEL DE VIDRO',
            autor: 'Ana Luisa Escorel'
        },
        {
            imagem: img5,
            titulo: 'ANEL DE VIDRO',
            autor: 'Ana Luisa Escorel'
        },
        {
            imagem: img6,
            titulo: 'NEXUS',
            autor: 'Yuval Noah'
        },
        {
            imagem: img7,
            titulo: 'O POBRE DE DIREITA',
            autor: 'Jessé Souza'
        },
        {
            imagem: img8,
            titulo: 'AINDA ESTOU AQUI',
            autor: 'Marcelo Rubens Paiva'
        },
         
    ];

    return (
        <main className={styles.mainContent}>
             <section className={styles.section_fitro}>
                {/* Filtro de Busca */}
                <nav className={styles.filtro}>
                    <div>
                        <input 
                            className="form-control" 
                            list="datalistOptions" 
                            id="exampleDataList" 
                            placeholder="Pesquise por título ou autor..." 
                        />
                        <datalist id="datalistOptions">
                            <option value="San Francisco" />
                            <option value="New York" />
                            <option value="Seattle" />
                            <option value="Los Angeles" />
                            <option value="Chicago" />
                        </datalist>
                    </div>
                </nav>

                {/* Categorias */}
                <nav className={styles.categorias}>
                    <div className="col">
                        <select className="form-select form-select-sm" aria-label="Seleção de Categoria">
                            <option defaultValue>Selecione a categoria</option>
                            <option value="1">Categoria 1</option>
                            <option value="2">Categoria 2</option>
                            <option value="3">Categoria 3</option>
                        </select>
                    </div>
                    <div className="col">
                        <select className="form-select form-select-sm" aria-label="Seleção de Autor">
                            <option defaultValue>Selecione o Autor</option>
                            <option value="1">Autor 1</option>
                            <option value="2">Autor 2</option>
                            <option value="3">Autor 3</option>
                        </select>
                    </div>
                    <div className="col">
                        <select className="form-select form-select-sm" aria-label="Seleção de Ano">
                            <option defaultValue>Selecione o Ano</option>
                            <option value="1">Ano 1</option>
                            <option value="2">Ano 2</option>
                            <option value="3">Ano 3</option>
                        </select>
                    </div>
                    <div className="col">
                        <select className="form-select form-select-sm" aria-label="Seleção de Ano">
                            <option defaultValue>Selecione o Ano</option>
                            <option value="1">Ano 1</option>
                            <option value="2">Ano 2</option>
                            <option value="3">Ano 3</option>
                        </select>
                    </div>
                </nav>
            </section>

            <section className={styles.section_cards}>
                <div className={styles.cardContainer}>
                    {livros.map((livro, index) => (
                        <a href="#" key={index} className={styles.cardLink}>
                            <div className={styles.cardCustom}>
                                <img src={livro.imagem} alt={livro.titulo} className={styles.cardImage} />
                                <div className="card-body">
                                    <div className={styles.tituloLivro}>
                                        <h3>{livro.titulo}</h3>
                                    </div>
                                    <div className={styles.autor}>
                                        <h4>{livro.autor}</h4>
                                    </div>
                                </div>
                                    <button className={styles.customButton}>Alugar</button>
                                </div>
                            
                        </a>
                    ))}
                </div>
            </section>

            {/* <section className={styles.section_cards}>
                <div className={styles.cardContainer}>
                    {livros.map((livro, index) => (
                        <a href="#" key={index} className={styles.cardLink}>
                            <div className={styles.cardCustom}>
                                <img src={livro.imagem} alt={livro.titulo} className={styles.cardImage} />
                                <div className="card-body">
                                    <div className={styles.tituloLivro}>
                                        <h3>{livro.titulo}</h3>
                                    </div>
                                    <div className={styles.autor}>
                                        <h4>{livro.autor}</h4>
                                    </div>
                                </div>
                                    <button className={styles.customButton}>Alugar</button>
                                </div>
                            
                        </a>
                    ))}
                </div>
            </section> */}
            
        </main>
    );
}

export default Acervo;
