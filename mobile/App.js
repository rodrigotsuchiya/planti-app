import React from 'react';
import AuthProvider from './src/contexts/auth';
import Routes from './src/routes';

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}