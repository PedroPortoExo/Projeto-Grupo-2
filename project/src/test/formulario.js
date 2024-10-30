import React from 'react';
import styles from './formulario.module.css';

export default function SignupForm() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: Date.now(), // Usado como ID temporário
        name,
        email,
        borrowedBooks: []
      })
    });
    // Redirecionar ou fornecer feedback ao usuário
    alert('Conta criada com sucesso!');
    setName('');
    setEmail('');
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Criar Conta</h2>
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

        <button type="submit" className={styles.button}>Cadastrar</button>
      </form>
    </div>
  );
}