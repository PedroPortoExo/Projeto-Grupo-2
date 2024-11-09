import { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Carrega o usuário do localStorage ao carregar o aplicativo
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) setUser(savedUser);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await fetch(`http://localhost:5000/users?email=${email}&password=${password}`);
      const users = await response.json();

      if (users.length > 0) {
        const loggedUser = users[0];
        setUser(loggedUser);
        localStorage.setItem('user', JSON.stringify(loggedUser));
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };
  const updateUser = async (updatedUser) => {
    try {
      const response = await fetch(`http://localhost:5000/users/${updatedUser.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ borrowedBooks: updatedUser.borrowedBooks }),
      });

      if (response.ok) {
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser));
      } else {
        console.error('Erro ao atualizar o usuário no servidor');
      }
    } catch (error) {
      console.error('Erro ao atualizar o usuário:', error);
    }
  };

  const returnBook = (bookId) => {
    setUser((prevUser) => ({
        ...prevUser,
        borrowedBooks: prevUser.borrowedBooks.filter(book => book.bookId !== bookId),
    }));
};


  return (
    <AuthContext.Provider value={{ user, login, logout, updateUser, returnBook}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);