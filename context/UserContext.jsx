import { createContext, useState } from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  async function login({ email, password }) {
    // Implement login logic here
  }

  async function register({ email, password }) {
    // Implement registration logic here
  }

  async function logout() {
    // Implement logout logic here
  }

  return <UserContext.Provider value={{ user, login, register, logout }}>{children}</UserContext.Provider>;
}
