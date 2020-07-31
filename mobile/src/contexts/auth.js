import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

export const AuthContext = createContext({
  signed: false,
  user: {},
  signIn: () => { },
  signOut: () => { },
  loading: true,
  error: null,
});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem('@Auth:user');

      if (storageUser) {

        setUser(JSON.parse(storageUser));
      }
      setLoading(false);
    }

    loadStorageData();
  }, []);

  async function signIn(email, password) {
    try {
      const response = await api.post('/login', {
        email,
        password,
      });

      setUser(response.data);
      setError(response.status);

      await AsyncStorage.setItem('@Auth:user', JSON.stringify(response.data));

      return;
    } catch (error) {
      if (error.response.data.error === 'Password does not match!') {
        setError('Senha não corresponde!');
      }
      if (error.response.data.error === 'User not found') {
        setError('Usuário não encontrado');
      }
    }
  }

  const signOut = async () => {
    setUser(null);
    setError(null);
    await AsyncStorage.removeItem('@Auth:user');
  };

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        signOut,
        loading,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}