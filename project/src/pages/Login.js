import React, { useState } from 'react';
import { useAuth } from '../components/AuthContext';
import styles from './login.module.css';
import Cadastro from './Cadastro';
import { useNavigate } from 'react-router-dom';
import {  Lock } from '../components/Icons'

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) {
      navigate('/Home');
    } else {
      alert('Usuário ou senha incorretos');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
      <Lock style={{ marginRight: '8px' }} />Login</h2>
      <form onSubmit={handleLogin}>
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

        <button type="submit" className={styles.button}>Entrar</button>
      </form>
      <p className={styles.signupText}>Ainda não é <span>membro</span>?</p>
      <button className={styles.signupButton} onClick={() => setIsSignupOpen(true)}>
        Cadastre-se
      </button>

      {isSignupOpen && <Cadastro onClose={() => setIsSignupOpen(false)} />}
    </div>
  );
}