import { Link } from 'react-router-dom';

function Acervo() {
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <Link to={`/aluguel/${book.id}`}>Ver mais</Link>
        </div>
      ))}
    </div>
  );
}