import styles from './sobrenos.module.css';

function SobreNos() {
    return (
        <div className={styles.mainContent}>
            <h1>Sobre Nós</h1>
            <p>
                A <strong>Biblioteca Virtual</strong> é um espaço digital inovador dedicado ao amor pela leitura e à democratização do acesso ao conhecimento. 
                Com um acervo diversificado de livros, audiobooks e recursos interativos, nossa missão é proporcionar uma experiência única e enriquecedora aos amantes da leitura, permitindo que explorem, aprendam e se conectem com histórias e ideias de todo o mundo, de maneira prática e acessível.
            </p>
            <p>
                Com a <strong>Biblioteca Virtual</strong>, o conhecimento está ao alcance de todos, a qualquer hora e em qualquer lugar. Nossa plataforma oferece uma interface intuitiva, permitindo que você navegue facilmente por categorias, autores e títulos, além de contar com sugestões personalizadas de acordo com suas preferências.
            </p>
            <p>
                Seja você um leitor ávido ou alguém que está começando a explorar o universo literário, a <strong>Biblioteca Virtual</strong> é o seu espaço para descobrir novos mundos e expandir seus horizontes.
            </p>
            <p className={styles.creators}>
                A <strong>Biblioteca Virtual</strong> foi idealizada e criada por <strong>André</strong>, <strong>Pedro</strong> e <strong>Ronan</strong>, com o apoio fundamental de <strong>Step</strong> e <strong>Duca</strong>.
            </p>
        </div>
    );
}

export default SobreNos;
