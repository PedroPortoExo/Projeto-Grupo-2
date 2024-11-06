import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await fetch(`http://localhost:5000/users?email=${email}&password=${password}`);
      const users = await response.json();

      if (users.length > 0) {
        const loggedUser = users[0];
        setUser(loggedUser); 
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      return false;
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);