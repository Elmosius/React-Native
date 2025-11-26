import { createContext, useState } from 'react';
import { ID } from 'react-native-appwrite';
import { account } from '../lib/appwrite';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  async function login({ email, password }) {
    try {
      await account.createEmailPasswordSession({
        email,
        password,
      });
      const res = await account.get();
      setUser(res);
    } catch (error) {
      throw Error(error.message);
    }
  }

  async function register({ email, password }) {
    try {
      await account.create({
        userId: ID.unique(),
        email,
        password,
      });

      await login({ email, password });
    } catch (error) {
      throw Error(error.message);
    }
  }

  async function logout() {
    await account.deleteSession('current');
    setUser(null);
  }

  return <UserContext.Provider value={{ user, login, register, logout }}>{children}</UserContext.Provider>;
}
