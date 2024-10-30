function BookRentalPage({ userId }) {
    const [books, setBooks] = React.useState([]);
  
    React.useEffect(() => {
      fetch("http://localhost:3001/books")
        .then(response => response.json())
        .then(setBooks);
    }, []);
  
    const handleRentBook = async (bookId) => {
      // Obtém dados do usuário
      const userResponse = await fetch(`http://localhost:3001/users/${userId}`);
      const user = await userResponse.json();
  
      // Verifica a disponibilidade e faz o aluguel
      const selectedBook = books.find(book => book.id === bookId);
      if (selectedBook.isAvailable) {
        const updatedUser = {
          ...user,
          borrowedBooks: [
            ...user.borrowedBooks,
            {
              bookId,
              title: selectedBook.title,
              checkoutDate: new Date().toISOString().split("T")[0]
            }
          ]
        };
  
        await fetch(`http://localhost:3001/users/${userId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedUser)
        });
  
        // Atualizar status do livro
        await fetch(`http://localhost:3001/books/${bookId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ isAvailable: false })
        });
  
        // Atualizar visualização de livros
        setBooks(books.map(book => book.id === bookId ? { ...book, isAvailable: false } : book));
      }
    };
  
    return (
      <div>
        <h2>Lista de Livros para Aluguel</h2>
        <ul>
          {books.map(book => (
            <li key={book.id}>
              {book.title} - {book.isAvailable ? "Disponível" : "Indisponível"}
              {book.isAvailable && (
                <button onClick={() => handleRentBook(book.id)}>Alugar</button>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }  