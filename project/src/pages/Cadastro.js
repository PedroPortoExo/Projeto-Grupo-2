import React, { useState } from 'react';
import styles from './cadastro.module.css';
import {UserRegister} from '../components/Icons'

export default function Cadastro({ onClose }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: Date.now().toString(),
        name,
        email,
        password,
        borrowedBooks: []
      })
    });
    onClose();
  };

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h2 className={styles.title}><UserRegister style={{ marginRight: '10px' }} />Cadastro</h2>
        <form onSubmit={handleSignup}>
          <label className={styles.label}>Nome</label>
          <input
            type="text"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label className={styles.label}>Email</label>
          <input
            type="email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className={styles.label}>Senha</label>
          <input
            type="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className={styles.button}>Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
