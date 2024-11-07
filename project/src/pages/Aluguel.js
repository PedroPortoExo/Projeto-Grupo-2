import React, { useState, useEffect } from 'react';
import styles from './aluguel.module.css';
import { useAuth } from '../components/AuthContext';
import { useParams } from 'react-router-dom';

export default function Aluguel() {
  const { user, updateUser } = useAuth();
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const response = await fetch(`http://localhost:5000/books/${id}`);
      const data = await response.json();
      setBook(data);
    };
    fetchBook();
  }, [id]);

  const handleRent = async () => {
    if (user && book) {
      const currentDate = new Date();
      const dueDate = new Date();
      dueDate.setDate(currentDate.getDate() + 30);

      const rentedBook = {
        bookId: book.id,
        title: book.title,
        dueDate: dueDate.toISOString().split('T')[0],
      };

      const updatedUser = {
        ...user,
        borrowedBooks: [...user.borrowedBooks, rentedBook],
      };

      await updateUser(updatedUser);
      alert(`Livro "${book.title}" alugado com sucesso!`);
    }
  };

  if (!book) return <p>Carregando...</p>;

  const imagePath = process.env.PUBLIC_URL + "/images/" + book.coverImage;

  return (
    <div className={styles.container}>
      <div className={styles['book-cover']}>
        <img src={imagePath} alt={`Capa do livro ${book.title}`} />
      </div>
      <div className={styles['book-info']}>
        <h1>{book.title}</h1>
        <p>Autor: {book.author}</p>
        <p>Gênero: {book.category}</p>
        <p>Livros disponíveis: {book.copiesAvailable}</p>
        <button onClick={handleRent} className={styles['rent-button']}>Alugar</button>
        <div className={styles.description}>
          <p>Descrição:</p>
          <p>{book.description}</p>
        </div>
      </div>
    </div>
  );
}