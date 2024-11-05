import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Carregar o usuário do localStorage ao iniciar
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) setUser(savedUser);
  }, []);

  // Função para login
  const login = async (email, password) => {
    const response = await fetch(`http://localhost:5000/users?email=${email}`);
    const data = await response.json();

    if (data.length > 0 && data[0].password === password) {
      setUser(data[0]);
      localStorage.setItem('user', JSON.stringify(data[0])); // Armazena o usuario no localStorage
      return true;
    }
    return false;
  };

  // Função para logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}