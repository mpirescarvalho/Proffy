import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';

export interface User {
  id: number;
  name: string;
  email: string;
  whatsapp: string;
  avatar: string;
  bio: string;
}

interface AuthContextData {
  loading: boolean;
  user: User | null;
  signIn(email: string, password: string, stayLogged?: boolean): Promise<void>;
  signOut(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorage() {
      const storedToken = await AsyncStorage.getItem('token');
      const storedUser = await AsyncStorage.getItem('user');
      if (storedToken && storedUser) {
        api.defaults.headers.Authorization = `Bearer ${storedToken}`;
        setUser(JSON.parse(storedUser));
      }
      setLoading(false);
    }
    loadStorage();
  }, []);

  async function signIn(
    email: string,
    password: string,
    stayLogged: boolean = false
  ) {
    const response = await api.post('/session', {
      email,
      password,
    });

    if (response.status === 200) {
      const { token, user } = response.data;

      api.defaults.headers.Authorization = `Bearer ${token}`;
      setUser(user);

      if (stayLogged) {
        await AsyncStorage.setItem('token', token);
        await AsyncStorage.setItem('user', JSON.stringify(user));
      }
    }
  }

  async function signOut() {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('user');
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        loading: loading,
        user: user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
